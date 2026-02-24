-- Add ESG risk classification column
-- Risk is derived from L1 category: high/medium/low
ALTER TABLE taxonomy_items ADD COLUMN esg_risk TEXT;

-- Populate based on L1 code prefix
-- High: 01, 03, 06, 12, 15
UPDATE taxonomy_items SET esg_risk = 'high' WHERE substr(code, 1, 2) IN ('01', '03', '06', '12', '15');
-- Medium: 02, 05, 08, 11, 13
UPDATE taxonomy_items SET esg_risk = 'medium' WHERE substr(code, 1, 2) IN ('02', '05', '08', '11', '13');
-- Low: 04, 07, 09, 10, 14
UPDATE taxonomy_items SET esg_risk = 'low' WHERE substr(code, 1, 2) IN ('04', '07', '09', '10', '14');
