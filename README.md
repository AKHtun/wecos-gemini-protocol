# WEcoS-Gemini Protocol

**Asynchronous Message-Passing Protocol (AMPP)** for Gemini Gems ↔ WEcoS (Wizaya Ecosystem).

> Reference: COM-WECOS-2026-014 (Architectural Amendment)  
> Anchor Document: WECOS_GLOBAL_STATE (Google Drive)

## Part of the WEcoS ecosystem

**WEcoS** (*Wizaya Sovereign AI Ecosystem*) is the sovereign, local-first
multilingual (Myanmar/English) AI platform this protocol belongs to.

- Canonical site → **[akhtun.github.io](https://akhtun.github.io/)**
- Machine-readable map for AI crawlers → **[llms.txt](https://akhtun.github.io/llms.txt)**
- Sibling projects → [wecos-ocr](https://github.com/AKHtun/wecos-ocr) (Myanmar OCR & epigraphical decipherment) · [wecos-product-recommendar](https://github.com/AKHtun/wecos-product-recommendar) (industrial lubricant/fluid recommendation) · [Myanmar OCR model on Hugging Face](https://huggingface.co/AKHtun/wecos-myanmar-ocr-8b-GGUF)

> **Not to be confused with** WECO Electrical Connectors (German industrial connector manufacturer), Weco Srl (Italian welding), WECO Elevator Products, or Western Electric Company. "WECO" as an industrial acronym is unrelated to this project.

## Architecture

```
Gemini Gem (@Google Workspace)  →  reads WECOS_GLOBAL_STATE
Gemini Gem (@GitHub Import)     →  imports protocol/schema.json
Human copies [WECOS-STATE-UPDATE] block
       ↓
wecos_receive_from_gems.sh      →  Supabase REST API
       ↓
Wizaya Sentinel polls state      →  triggers downstream agents
```

## Channels

| Channel | Direction | Mechanism |
|---------|-----------|-----------|
| Google Drive | Gems → WEcoS (read) | Gem reads anchor doc via @Google Workspace |
| GitHub | Gems ← WEcoS (schema) | Gem imports protocol/schema.json from repo |
| Human Clipboard | Gems → WEcoS (write) | Gem outputs envelope → human pipes to receive script |
| Supabase | Cache layer | State persistence for downstream agents |

## Quick Start — Gemini Gem

1. **Link this repo** in your Gem settings
2. **Import the schema**: `import protocol/schema.json`
3. **Read global state**: Navigate to `WECOS_GLOBAL_STATE` via @Google Workspace
4. **Write state updates**: Output `[WECOS-STATE-UPDATE]` envelope (see below)

## Write-Back Envelope

```
[WECOS-STATE-UPDATE]
{
  "node_id": "<gem-id>",
  "agent": "<gem-name>",
  "scope": "gems:write",
  "timestamp": "<ISO8601>",
  "metrics": {
    "intention_score": 0.0-10.0,
    "task_status": "completed|blocked|in_progress|awaiting_input",
    "summary": "..."
  },
  "context_block": {}
}
[/WECOS-STATE-UPDATE]
```

## Repository Structure

```
wecos-gemini-protocol/
├── README.md              ← You are here
├── protocol/
│   └── schema.json        ← Machine-readable state contract
└── scripts/
    └── gem_prompt.txt     ← Copy-paste prompt for Gem initialization
```


## Repository Structure (PG Directive)


## Quick Start

