"use client";

import { Pencil, Plus, Trash2 } from "lucide-react";

type Props = {
  onNew: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onSave: () => void;
  showSave: boolean;
};

export default function MainGroupToolbar({
  onNew,
  onEdit,
  onDelete,
  onSave,
  showSave,
}: Props) {
  return (
    <div className="flex items-center gap-15 mb-6 border-b border-gray-200 pb-4">
      <button
        onClick={onNew}
        className="flex items-center text-slate-700 hover:text-teal-700"
      >
        <Plus size={18} />
        <span>New</span>
      </button>

      <button
        onClick={onEdit}
        className="flex items-center text-slate-700 hover:text-teal-700"
      >
        <Pencil size={18} />
        <span>Edit</span>
      </button>

      <button
        onClick={onDelete}
        className="flex items-center text-red-600 hover:text-red-700"
      >
        <Trash2 size={18} />
        <span>Delete</span>
      </button>

      {showSave && (
        <button
          onClick={onSave}
          className="flex items-center text-green-600 hover:text-green-700"
        >
          Save
        </button>
      )}
    </div>
  );
}