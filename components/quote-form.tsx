"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";
import { whatsappLink } from "@/lib/site-config";

const projectTypes = [
  "Site institucional",
  "Landing page",
  "Loja virtual",
  "Bot de WhatsApp",
  "Sistema sob medida",
  "Outro",
];

const deadlines = ["O quanto antes", "Em até 1 mês", "Sem pressa — só pesquisando"];

export function QuoteForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const company = String(form.get("company") ?? "").trim();
    const whatsapp = String(form.get("whatsapp") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const projectType = String(form.get("projectType") ?? "").trim();
    const deadline = String(form.get("deadline") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name || !whatsapp || !projectType || !message) {
      setError("Preencha nome, WhatsApp, tipo de projeto e uma breve descrição antes de enviar.");
      return;
    }
    setError(null);

    const text = [
      "Olá! Vim pelo site da VorinWeb e quero solicitar um orçamento.",
      "",
      `Nome: ${name}`,
      company && `Empresa: ${company}`,
      `WhatsApp: ${whatsapp}`,
      email && `E-mail: ${email}`,
      `Tipo de projeto: ${projectType}`,
      deadline && `Prazo desejado: ${deadline}`,
      `Mensagem: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    router.push("/orcamento/obrigado");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[20px] border border-border bg-input p-8 md:p-9">
      <div className="font-display mb-1.5 text-lg font-bold text-text">Conta pra gente o seu projeto</div>
      <p className="mb-6 text-sm text-faint">Preencha abaixo. Vamos abrir o WhatsApp com sua mensagem pronta para envio.</p>

      {error && (
        <div role="alert" className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-400">
          {error}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Seu nome" htmlFor="name" required>
          <input id="name" name="name" type="text" required placeholder="Como posso te chamar?" className={inputClass} />
        </Field>
        <Field label="Empresa" htmlFor="company">
          <input id="company" name="company" type="text" placeholder="Nome do seu negócio" className={inputClass} />
        </Field>
        <Field label="WhatsApp" htmlFor="whatsapp" required>
          <input id="whatsapp" name="whatsapp" type="tel" required placeholder="(11) 90000-0000" className={inputClass} />
        </Field>
        <Field label="E-mail" htmlFor="email">
          <input id="email" name="email" type="email" placeholder="seuemail@gmail.com" className={inputClass} />
        </Field>
        <Field label="Tipo de projeto" htmlFor="projectType" required>
          <select id="projectType" name="projectType" required defaultValue="" className={inputClass}>
            <option value="" disabled>Selecione uma opção</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </Field>
        <Field label="Prazo desejado" htmlFor="deadline">
          <select id="deadline" name="deadline" defaultValue="" className={inputClass}>
            <option value="" disabled>Selecione uma opção</option>
            {deadlines.map((deadline) => (
              <option key={deadline} value={deadline}>{deadline}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Conta mais sobre o seu negócio" htmlFor="message" required className="mt-4">
        <textarea
          id="message"
          name="message"
          required
          placeholder="Me conta um pouco sobre o seu negócio e o que você precisa..."
          className={`${inputClass} min-h-[110px] resize-y`}
        />
      </Field>

      <button
        type="submit"
        className="font-display mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp py-3.5 text-sm font-bold text-white shadow-[0_4px_16px_rgba(22,163,74,0.3)] transition-all hover:bg-whatsapp-dark hover:-translate-y-0.5"
      >
        <Send className="h-4 w-4" aria-hidden />
        Quero começar meu projeto
      </button>
    </form>
  );
}

const inputClass =
  "w-full rounded-lg border-[1.5px] border-border bg-input px-3.5 py-2.5 text-sm text-text outline-none transition-colors placeholder:text-faint focus:border-brand-500 focus:ring-3 focus:ring-brand-500/10";

function Field({
  label,
  htmlFor,
  required,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="font-display mb-1.5 block text-xs font-semibold tracking-wide text-muted">
        {label} {required && <span className="text-brand-500">*</span>}
      </label>
      {children}
    </div>
  );
}
