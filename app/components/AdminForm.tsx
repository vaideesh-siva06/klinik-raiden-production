"use client";

import React, { useState } from "react";
import axios from "axios";
import { Work } from "../types/work";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { useWorks } from "../context/WorksContext";

const AdminForm = () => {
  const { works, setWorks } = useWorks(); // ✅ setWorks is now always defined

  const [form, setForm] = useState<Omit<Work, "_id">>({
    title: "",
    img: "",
    bookCoverImg: "",
    quote: "",
    description: "",
    downloadLink: "",
    newRelease: true,
  });

  const [editingId, setEditingId] = useState<string | null>(null);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement; // assert type

    const { name, value, type, checked } = target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("adminLoginTime");
    window.location.reload();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingId) {
        const res = await axios.put(`/api/works/${editingId}`, form);
        const updatedWork = res.data;

        setWorks((prev) =>
          prev.map((w) => (w._id === editingId ? updatedWork : w))
        );

        setStatus("Book updated successfully!");
      } else {
        const res = await axios.post("/api/works", form);
        const newWork = res.data;

        setWorks((prev) => [...prev, newWork]);
        setStatus("Book added successfully!");
      }

      setForm({
        title: "",
        img: "",
        bookCoverImg: "",
        quote: "",
        description: "",
        downloadLink: "",
        newRelease: true,
      });
      setEditingId(null);
    } catch (err: any) {
      console.error(err);
      setStatus(err.response?.data?.message || "Error saving book.");
    }
  };

  const handleEdit = (book: Work) => {
    setEditingId(book._id ?? null);
    setForm({
      title: book.title,
      img: book.img,
      bookCoverImg: book.bookCoverImg,
      quote: book.quote || "",
      description: book.description,
      downloadLink: book.downloadLink,
      newRelease: book.newRelease || false,
    });
    setStatus("");
  };

  const handleDelete = async (_id: string) => {
    if (!confirm("Are you sure you want to delete this work?")) return;

    try {
      await axios.delete(`/api/works/${_id}`);
      setWorks((prev) => prev.filter((w) => w._id !== _id));
      setStatus("Book deleted successfully!");
    } catch (err: any) {
      console.error(err);
      setStatus(err.response?.data?.message || "Error deleting book.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10 px-4 gap-10">
      {/* Logout */}
      <button
        onClick={handleLogout}
        className="self-end bg-red-600 hover:bg-red-700 transition-colors px-4 py-2 rounded font-semibold md:mr-9"
      >
        Logout
      </button>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col gap-4 p-6 bg-gray-900 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">
          {editingId ? "Edit Work" : "Add New Work"}
        </h1>

        <label>Title</label>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500"
          required
        />

        <label>Book Cover Image URL</label>
        <input
          type="url"
          placeholder="Book Cover Image URL"
          name="bookCoverImg"
          value={form.bookCoverImg}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500"
          required
        />

        <label>Standing Book Image URL</label>
        <input
          type="url"
          placeholder="Standing Book Image URL"
          name="img"
          value={form.img}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500"
          required
        />

        <label>Quote</label>
        <textarea
          placeholder="Quote"
          name="quote"
          value={form.quote}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500"
          rows={3}
        />

        <label>Description</label>
        <textarea
          placeholder="Description"
          name="description"
          value={form.description}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500"
          rows={5}
          required
        />

        <label>PDF Download Link</label>
        <input
          type="text"
          placeholder="Download Link"
          name="downloadLink"
          value={form.downloadLink}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500"
          required
        />

        <label className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            name="newRelease"
            checked={form.newRelease}
            onChange={handleChange}
            className="w-4 h-4"
          />
          <span>New Release</span>
        </label>

        <div className="flex flex-col md:flex-row gap-2">
          <button
            type="submit"
            className="mt-4 py-2 px-4 bg-red-600 hover:bg-red-700 transition-colors rounded font-semibold flex-1"
          >
            {editingId ? "Update Work" : "Add Work"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setForm({
                  title: "",
                  img: "",
                  bookCoverImg: "",
                  quote: "",
                  description: "",
                  downloadLink: "",
                  newRelease: true,
                });
                setStatus("");
              }}
              className="mt-4 py-2 px-4 bg-gray-700 hover:bg-gray-600 transition-colors rounded font-semibold flex-1"
            >
              Add New Work
            </button>
          )}
        </div>

        {status && (
          <p className="mt-2 text-center text-gray-300 break-words">{status}</p>
        )}
      </form>

      {/* Works List */}
      <div className="w-full max-w-4xl flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-4 text-center">Works</h2>
        {works.map((work) => (
          <div
            key={work._id}
            className="flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-800 p-4 rounded"
          >
            <div className="flex items-center gap-4">
              <img
                src={work.bookCoverImg}
                alt={work.title}
                className="w-16 h-20 object-cover rounded"
              />
              <div>
                <p className="font-semibold">{work.title}</p>
                {work.newRelease && (
                  <span className="text-red-500 text-sm">NEW RELEASE</span>
                )}
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(work)}
                className="py-1 px-3 bg-yellow-600 hover:bg-yellow-700 rounded text-sm"
              >
                <FaPencil />
              </button>
              <button
                onClick={() => handleDelete(work._id!)}
                className="py-1 px-3 bg-red-600 hover:bg-red-700 rounded text-sm"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
        {works.length === 0 && <p className="text-center">No Works Found.</p>}
      </div>
    </div>
  );
};

export default AdminForm;
