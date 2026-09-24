# Droids Code — Site Oficial (protótipo UI/UX)

Protótipo funcional do site oficial do jogo Droids Code, em um único arquivo HTML autocontido (sem build, sem dependências além de fontes do Google Fonts).

## Como usar

Abra `index.html` diretamente no navegador — não precisa de servidor.

## O que tem dentro

- **Home** — hero, apresentação, fluxo "Programar → Combater → Evoluir", teaser de universo e personagens, CTA final.
- **Jogar** — tela com o botão "Abrir o jogo", que aponta para um link externo (placeholder).
- **História** — locais do Ato 1 (Ferrovale, Cratera, Estação de Captação) e as facções.
- **Personagens** — Lip, Apollo, Ivo, Rasha, Teodoro, Nadir (placeholder) e NPCs (Tácio, Dara).
- **O Jogo / Mecânicas** — pipeline Código→Comando→Ação→Resultado, sistema de peças, progressão pedagógica (Fases 1–3).
- **Sobre** — dados do TCC, instituição, equipe, stack técnica.
- Menu mobile responsivo e um painel de **Design System** (paleta, tipografia, botões, cards), acessível pelo link no rodapé.

## Pendências conhecidas

- **Link do jogo**: em `index.html`, procure por `SEU-LINK-DO-JOGO-AQUI` (dentro da seção "Jogar") e substitua pela URL real assim que o jogo estiver hospedado.
- Imagens de personagens estão como placeholders identificados ("placeholder de arte") — nenhuma arte final foi inventada.
- Não há arquivo `.fig` nativo neste pacote. Para importar no Figma, abra o `index.html` no navegador e use o inspetor para copiar cores/tipografia/espaçamentos, ou tire screenshots das telas como referência.

## Paleta

| Uso | Cor |
|---|---|
| Base | `#0A0D12` |
| Painel | `#15181D` |
| Borda | `#2C323B` |
| Texto | `#D8DCE2` |
| Texto secundário | `#7F8C8D` |
| Inativo | `#3A4750` |
| Ação (CTA) | `#FF1A1A` |
| Indicador | `#E5AA70` / `#D68910` |
| Crítico / pressed | `#5C0808` |

## Tipografia

- Títulos: Chakra Petch
- Corpo: IBM Plex Sans
- - Código / labels: IBM Plex Mono
 
## Documentação
Clique aqui para [Acessar o Relatório PDF](./Droids_Code_UIUX_Documentacao.pdf)

