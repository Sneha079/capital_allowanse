"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
type InputFieldProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
};

const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
}: InputFieldProps) => {
  return (
    <div>
      <label className="block mb-2 text-[15px] font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full h-[52px] border border-gray-300 rounded-xl px-4 outline-none focus:border-teal-600 
        focus:ring-1 focus:ring-teal-600"
      />
    </div>
  );
};

export default function ClientForm({ client }: { client?: any }) {
  const searchParams = useSearchParams();
  const isEditMode = !client || searchParams.get("edit") === "true";
  const [id, setId] = useState(client?.company_id || "");
  const [name, setName] = useState(client?.name || "");
  const [companyNumber, setCompanyNumber] = useState(
    client?.company_number || "",
  );
  const [email, setEmail] = useState(client?.contact_email || "");
  const [phone, setPhone] = useState(client?.contact_phone || "");
  const [county, setCounty] = useState(client?.county || "");
  const [address1, setAddress1] = useState(client?.address1 || "");
  const [address2, setAddress2] = useState(client?.address2 || "");
  const [postcode, setPostcode] = useState(client?.postcode || "");
  const [password, setPassword] = useState(client?.password || "");

  const handleSave = async () => {
    try {
      const url = client?.company_id ? `/api/client/${client.company_id}` : "/api/client";

      const method = client?.company_id ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company_id: id,
          name,
          company_number: companyNumber,
          contact_email: email,
          contact_phone: phone,
          address1,
          address2,
          county,
          postcode,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert(
          client?.company_id
            ? "Client updated successfully!"
            : "Client saved successfully!",
        );

        if (!client?.company_id) {
          setId("");
          setName("");
          setCompanyNumber("");
          setEmail("");
          setPhone("");
          setCounty("");
          setAddress1("");
          setAddress2("");
          setPostcode("");
          setPassword("");
        }
      } else {
        alert(data.message);
      }
    } catch (error: any) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 w-full">
      <div className="grid grid-cols-2  gap-x-6 gap-y-15">
        <InputField
          label="Client ID *"
          
          value={id}
          onChange={(e) => setId(e.target.value)}
          disabled={!isEditMode}
        />

        <InputField
          label="Client Name *"
          placeholder="Client or company name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={!isEditMode}
        />

        <InputField
          label="Company Number *"
          placeholder="Companies House number"
          value={companyNumber}
          onChange={(e) => setCompanyNumber(e.target.value)}
          disabled={!isEditMode}
        />

        <InputField
          label="Contact Email *"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={!isEditMode}
        />

        <InputField
          label="Contact Phone *"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={!isEditMode}
        />

        <InputField
          label="County *"
          value={county}
          onChange={(e) => setCounty(e.target.value)}
          disabled={!isEditMode}
        />

        <InputField
          label="Address 1 *"
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
          disabled={!isEditMode}
        />

        <InputField
          label="Address 2"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
          disabled={!isEditMode}
        />

        <InputField
          label="Postcode *"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          disabled={!isEditMode}
        />

        <InputField
          label="Password *"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={!isEditMode}
        />
      </div>

      <div className="flex justify-end gap-4 mt-10">
        <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
          Cancel
        </button>

        {isEditMode && (
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800"
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
}
