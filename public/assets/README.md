# /public/assets — CJM Site

Repositório de imagens e vídeos gerados/produzidos para o site da CJM
(Limpeza de Coifas e Manutenção de Exaustores). Organizado por finalidade
para facilitar geração via Higgsfield, integração no Next.js e manutenção
futura.

> Nota: os assets já existentes em `/public/brand/` (logos oficiais) e
> `/public/fotos/` (fotos reais de trabalhos executados) foram preservados
> nos seus locais originais e **não** foram movidos para cá. Esta pasta
> `/public/assets/` é destinada a novos materiais (gerados ou produzidos
> a partir de agora). Uma futura consolidação, se desejada, deve ser feita
> deliberadamente e não automaticamente.

## Estrutura de pastas

| Pasta | Finalidade |
|---|---|
| `brand/` | Elementos de identidade visual gerados (variações de logo, texturas de marca, padrões gráficos) que complementam — sem substituir — os arquivos oficiais em `/public/brand/`. |
| `hero/` | Imagens e vídeos da seção Hero da Home (desktop e mobile). |
| `services/coifas/` | Assets da página "Limpeza de Coifas". |
| `services/dutos/` | Assets da página "Limpeza de Dutos". |
| `services/exaustores/` | Assets da página "Manutenção de Exaustores". |
| `services/damper/` | Assets da página "Damper Corta-Fogo". |
| `services/lavador-gases/` | Assets da página "Lavador de Gases". |
| `services/ventilacao/` | Assets da página "Sistemas de Ventilação". |
| `portfolio/` | Fotos (reais ou temporárias) de trabalhos executados, organizadas por cliente/serviço. |
| `before-after/` | Composições conceituais de antes/depois, usadas enquanto não há fotos reais equivalentes. |
| `videos/` | Vídeos curtos institucionais (Hero loop, seções de serviço, redes sociais). |
| `icons/` | Ícones customizados (fora dos SVGs padrão do Next.js em `/public/`). |
| `social/` | Artes para redes sociais e campanhas, reaproveitando a identidade visual do site. |

## Padrão de nomenclatura

Formato geral: `[tipo]-[contexto]-[variante]-v[NN].[ext]`

- Hero: `hero-cjm-desktop-v01.webp`, `hero-cjm-mobile-v01.webp`
- Hero (vídeo): `hero-cjm-loop-v01.mp4`
- Serviços: `service-[nome-do-servico]-v01.webp`
  - `service-coifas-v01.webp`
  - `service-dutos-v01.webp`
  - `service-exaustores-v01.webp`
  - `service-damper-v01.webp`
  - `service-lavador-gases-v01.webp`
  - `service-ventilacao-v01.webp`
- Portfólio (fotos reais): `portfolio-[cliente]-[cidade]-[servico]-01.webp`
  - ex.: `portfolio-restaurante-x-vila-velha-limpeza-coifa-01.webp`
- Antes/depois: `before-after-[servico]-v01.webp`
- Ícones: `icon-[nome]-v01.svg`
- Social: `social-[plataforma]-[contexto]-v01.webp`

Regras:

- Sempre `.webp` para imagens estáticas (otimização) e `.mp4` para vídeos curtos.
- Versão sempre com dois dígitos (`v01`, `v02`, ...) para permitir iteração sem sobrescrever aprovações anteriores.
- Nomes em minúsculas, com hífen separando palavras, sem acentos ou espaços.
- Nunca reutilizar o mesmo nome de arquivo para conteúdo diferente — sempre incrementar a versão.
