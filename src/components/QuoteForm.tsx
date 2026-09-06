"use client";

import { useState, type FormEvent } from "react";
import { waLink } from "@/lib/site";

const serviceOptions = [
  "Coifa",
  "Dutos",
  "Exaustor",
  "Lavador de gases",
  "Damper corta-fogo",
  "Manutenção",
  "Engenharia",
  "Outros",
];

export function QuoteForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  function toggleService(service: string) {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service],
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const lines = [
      "Olá, gostaria de solicitar um orçamento com a CJM.",
      "",
      `Nome: ${data.get("nome")}`,
      `Empresa: ${data.get("empresa") || "-"}`,
      `Telefone: ${data.get("telefone")}`,
      `E-mail: ${data.get("email") || "-"}`,
      `Cidade: ${data.get("cidade")}`,
      `Tipo de estabelecimento: ${data.get("estabelecimento")}`,
      `Serviço(s) desejado(s): ${selectedServices.length ? selectedServices.join(", ") : "-"}`,
      `Mensagem: ${data.get("mensagem") || "-"}`,
    ];

    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Nome" name="nome" required />
        <Field label="Empresa" name="empresa" />
        <Field label="Telefone" name="telefone" type="tel" required />
        <Field label="E-mail" name="email" type="email" />
        <Field label="Cidade" name="cidade" required />
        <Field label="Tipo de estabelecimento" name="estabelecimento" required />
      </div>

      <fieldset>
        <legend className="text-sm font-bold uppercase tracking-wide text-brand-navy">
          Serviço desejado
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {serviceOptions.map((service) => {
            const active = selectedServices.includes(service);
            return (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                aria-pressed={active}
                className={`rounded-sm border px-3 py-1.5 text-sm transition ${
                  active
                    ? "border-brand-green bg-brand-green text-white"
                    : "border-brand-steel-light text-neutral-700 hover:border-brand-green"
                }`}
              >
                {service}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="mensagem" className="text-sm font-bold uppercase tracking-wide text-brand-navy">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          placeholder="Quantidade de coifas, exaustores, metragem aproximada de dutos, ou outros detalhes."
          className="mt-2 w-full rounded-sm border border-brand-steel-light px-3 py-2 text-sm outline-none focus:border-brand-green"
        />
      </div>

      <p className="text-xs text-neutral-500">
        Fotos e documentos do local podem ser enviados diretamente pelo WhatsApp após o envio
        deste formulário.
      </p>

      <button
        type="submit"
        className="rounded-sm bg-brand-green px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-brand-green-dark"
      >
        Enviar pelo WhatsApp
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-bold uppercase tracking-wide text-brand-navy">
        {label}
        {required && <span className="text-brand-green"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-sm border border-brand-steel-light px-3 py-2 text-sm outline-none focus:border-brand-green"
      />
    </div>
  );
}
