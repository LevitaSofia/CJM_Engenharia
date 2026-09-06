# CJM Brand Kit v01

Documento de referência visual oficial para toda geração futura de imagem/vídeo
via Higgsfield para o site da CJM. Complementa (não substitui)
`cjm-brand-kit-v01.json`, que é a versão estruturada para uso programático.

Estado persistido em `brandkit/state.json` (fora de `public/`, não é servido
pelo site) via `higgsfield-brandkit`. As três fundações — logo, paleta e
tipografia — já estavam **fixadas pelo próprio projeto** (não foram criadas
agora), então este Brand Kit as trava como autoritativas em vez de propor
novas.

## 1. Referências analisadas

- **Logo oficial** (`public/brand/`): `cjm-logo.png` (completo, fundo claro),
  `cjm-mark.png` (símbolo), `cjm-logo-dark.png` e `cjm-mark-dark.png`
  (variantes para fundo escuro). PNG RGBA, 1536px de largura.
- **Paleta e tipografia já implementadas no código**: `src/app/globals.css`
  (tokens `--color-navy`, `--color-green`, `--color-steel`...) e
  `src/app/layout.tsx` (fonte Geist via `next/font/google`). Isso é mais
  confiável do que extrair cor da imagem do logo, porque é exatamente o que
  já está em produção no site.
- **Fotos reais existentes** (`public/fotos/`): equipe limpando coifa,
  limpeza manual, manutenção de motor/grelha de exaustor, limpeza de dutos,
  coifa industrial instalada. Confirmam a estética real do segmento (aço
  inox, uniformes, ambiente de cozinha profissional).
  - Atenção: pelo menos uma foto (`manutencao-exaustor-motor.jpg`) contém um
    logotipo de terceiro visível na roupa do técnico — é material de banco de
    imagens, temporário. Registrado como pendência (ver seção 5).

## 2. Paleta definida

Adotada **tal como já existe no site** (não foi inventada uma nova):

| Cor | Hex | Papel |
|---|---|---|
| Navy | `#0b1f33` | Primária |
| Navy Dark | `#071523` | Primária escura |
| Green | `#16794d` | Acento |
| Green Dark | `#0f5c3a` | Acento escuro |
| Steel | `#64748b` | Neutro |
| Steel Light | `#e2e8f0` | Neutro claro |
| Foreground | `#101820` | Texto |
| Background | `#ffffff` | Fundo |

Cores de apoio (apenas para textura/geração visual, não codificadas no CSS):
grafite `#3a3f44`, cinza metálico `#9aa5b1` (aço inox escovado).

Proibido: verde saturado tipo "eco", azul neon/ciano futurista, gradientes
vibrantes multicoloridos.

## 3. Direção fotográfica definida

- Realismo fotográfico (nunca 3D estilizado ou ilustração).
- Ambientes reais: cozinha profissional, indústria, sistemas de exaustão.
- Iluminação industrial discreta, contraste profissional, sem sombras
  dramáticas de estúdio.
- Materiais: aço inox escovado, metal, vidro, superfícies industriais
  limpas.
- Quando houver pessoas: técnicos profissionais, EPIs compatíveis (capacete,
  luvas, uniforme), comportamento natural, sem poses artificiais, sem
  destaque desnecessário de rosto, sem logotipos de terceiros visíveis.
- Hero: cozinha profissional + coifa industrial em inox + sistema de
  exaustão, iluminação azul-marinho dominante com pequenos acentos verdes,
  sensação de eficiência/limpeza/tecnologia/segurança.
- Cada serviço tem cena própria (coifas, dutos, exaustores, damper, lavador
  de gases, ventilação — ver `cjm-brand-kit-v01.json → applications.servicos`)
  mas todos dentro do mesmo universo visual/cromático.

## 4. Regras de composição

- Espaço negativo reservado para overlay de título/CTA.
- Áreas mais escuras ou neutras nas zonas onde entrará texto.
- Nenhum elemento importante próximo às bordas.
- Recortes distintos para desktop (16:9) e mobile (9:16 ou 4:5).
- **Nunca inserir texto, números, UI ou logotipos dentro da imagem gerada** —
  o logo real é aplicado depois, via código (Header/Footer), nunca dentro do
  asset visual.
- Bordas retas/angulares, evitando cantos arredondados em excesso (alinhado
  à geometria do logo).

## 5. Elementos proibidos

- Estética de limpeza residencial: baldes, vassouras, luvas domésticas,
  espuma exagerada, bolhas.
- Ícones infantis ou genéricos de faxina.
- Excesso de "verde ecológico".
- Cyberpunk, neon exagerado, efeitos futuristas.
- Texto ou logotipos falsos dentro da imagem.
- Poses artificiais de banco de imagens barato.
- Logotipos de terceiros visíveis (pendência identificada em uma das fotos
  de referência atuais — não deve se repetir em novas gerações).

## 6. Arquivos criados

- `public/assets/brand/cjm-brand-kit-v01.json` — Brand Lock estruturado
  (fundações fixas + regras de composição + direção por serviço), para uso
  programático/consulta rápida antes de cada geração.
- `public/assets/brand/cjm-brand-kit-v01.md` — este documento, versão legível.
- `cjm-site/brandkit/state.json` — estado interno da skill `higgsfield-brandkit`
  (logo, paleta e tipografia marcados como `user_supplied` / fixos). Não fica
  em `public/`, não é servido pelo site; é usado pela skill para não repetir
  perguntas em gerações futuras.

Nenhum logo oficial foi sobrescrito. Nenhuma página, componente ou layout foi
alterado.

## 7. Como este Brand Kit será usado nas próximas gerações

Antes de qualquer chamada ao `higgsfield-generate` para Hero, imagens de
serviço, portfólio ou vídeos, copiar o bloco abaixo para o prompt (valores
exatos vêm de `cjm-brand-kit-v01.json`):

```text
[BRAND LOCK — CJM — NÃO DESVIAR]
Paleta: navy #0b1f33 / #071523, verde #16794d / #0f5c3a, aço #64748b / #e2e8f0, branco #ffffff, texto #101820
Estilo: engenharia industrial premium, realista, iluminação industrial discreta
Materiais: aço inox escovado, metal, vidro, superfícies industriais limpas
Composição: espaço negativo para título, sem texto/logo embutido, bordas sem elementos importantes
Nunca: baldes/vassouras/espuma residencial, verde "eco", neon/cyberpunk, poses de stock barato, logotipos de terceiros
```

Isso garante que toda imagem/vídeo gerado (Hero, cards de serviço,
antes/depois, social) mantenha a mesma família de cores, mesmo tratamento de
luz, mesmo nível de realismo e a mesma linguagem corporativa — sem criar uma
estética diferente por página.

Próximo passo sugerido (conforme combinado): gerar **apenas 2 assets de
teste** — Hero desktop e Hero mobile — usando este Brand Lock, para validar a
estética antes de produzir o restante.
