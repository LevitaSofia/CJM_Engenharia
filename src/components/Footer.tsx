import Image from "next/image";
import Link from "next/link";
import { company, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-brand-steel-light">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/brand/cjm-mark-dark.png"
            alt="CJM Engenharia e Limpeza de Coifas"
            width={215}
            height={100}
            className="h-12 w-auto"
          />
          <p className="mt-3 text-xs">{company.legalName}</p>
          <p className="text-xs">CNPJ {company.cnpj}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Navegação</p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Contato</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>{company.phones[0]}</li>
            <li>{company.phones[1]}</li>
            <li>{company.email}</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Endereço</p>
          <address className="mt-3 space-y-1 text-sm not-italic">
            <p>{company.address.street}</p>
            <p>
              {company.address.city} – {company.address.state}
            </p>
            <p>CEP {company.address.zip}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs">
        © {new Date().getFullYear()} {company.legalName}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
