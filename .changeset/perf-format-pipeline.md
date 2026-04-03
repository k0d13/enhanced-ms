---
"enhanced-ms": minor
---

Format throughput improved by up to 5x. The internal pipeline was reduced
from four passes to one, with option presets cached at module load so
common calls make zero allocations.
