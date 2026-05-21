CREATE TABLE IF NOT EXISTS wecos_ingestion_events (id BIGSERIAL PRIMARY KEY,source TEXT,payload JSONB,ingested_at TIMESTAMPTZ DEFAULT NOW());
CREATE INDEX IF NOT EXISTS idx_ingestion_source ON wecos_ingestion_events(source);
