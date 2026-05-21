CREATE TABLE IF NOT EXISTS gemini_state (id BIGSERIAL PRIMARY KEY,node_id TEXT NOT NULL,metric JSONB NOT NULL,context_block JSONB,timestamp TIMESTAMPTZ DEFAULT NOW());
CREATE UNIQUE INDEX IF NOT EXISTS idx_gemini_dedup ON gemini_state(node_id,timestamp DESC);
