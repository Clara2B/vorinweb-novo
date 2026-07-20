import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Política de Privacidade",
  description: "Como a VorinWeb trata os dados enviados por este site, em conformidade com a LGPD.",
  path: "/politica-de-privacidade",
});

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Política de Privacidade", path: "/politica-de-privacidade" }]} />
      <Section>
        <div className="mx-auto max-w-[720px]">
          <h1 className="font-display mb-8 text-3xl font-extrabold text-text">Política de Privacidade</h1>

          <div className="flex flex-col gap-8 text-sm leading-relaxed text-muted">
            <p>
              Esta página explica, de forma simples, como o site da {siteConfig.name} ({siteConfig.url}) trata os dados de quem o visita e utiliza os formulários de contato, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
            </p>

            <section>
              <h2 className="font-display mb-2 text-lg font-bold text-text">Quais dados coletamos</h2>
              <p>
                Quando você preenche o formulário de orçamento ou entra em contato, coletamos apenas os dados que você mesmo informa: nome, empresa, telefone/WhatsApp, e-mail e a mensagem descrita. Esses dados são usados exclusivamente para responder à sua solicitação.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-2 text-lg font-bold text-text">Como seus dados são enviados</h2>
              <p>
                O formulário deste site não armazena seus dados em nenhum banco de dados ou servidor da VorinWeb. Ao enviar o formulário, uma mensagem com as informações preenchidas é aberta diretamente no WhatsApp, no seu próprio dispositivo, para que você confirme e envie para o nosso número de atendimento. A partir desse ponto, a conversa fica registrada no WhatsApp, conforme a política de privacidade do próprio WhatsApp/Meta.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-2 text-lg font-bold text-text">Preferência de tema (claro/escuro)</h2>
              <p>
                Guardamos apenas sua preferência de tema visual (claro ou escuro) no armazenamento local do seu navegador (localStorage). Essa informação não sai do seu dispositivo e não é compartilhada com terceiros.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-2 text-lg font-bold text-text">Com quem compartilhamos dados</h2>
              <p>
                Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins de marketing. Os dados enviados via WhatsApp ou e-mail são usados exclusivamente pela equipe da VorinWeb para responder à sua solicitação de orçamento ou suporte.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-2 text-lg font-bold text-text">Seus direitos</h2>
              <p>
                Você pode, a qualquer momento, solicitar informações sobre os dados que a VorinWeb possui sobre você, pedir a correção ou a exclusão dessas informações das nossas conversas, entrando em contato pelo e-mail{" "}
                <a href={`mailto:${siteConfig.email}`} className="font-semibold text-brand-500 hover:underline">{siteConfig.email}</a>.
              </p>
            </section>

            <section>
              <h2 className="font-display mb-2 text-lg font-bold text-text">Alterações desta política</h2>
              <p>
                Esta política pode ser atualizada conforme o site evolui. Recomendamos revisitar esta página periodicamente para se manter informado.
              </p>
            </section>

            <p className="text-xs text-faint">Última atualização: julho de 2026.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
