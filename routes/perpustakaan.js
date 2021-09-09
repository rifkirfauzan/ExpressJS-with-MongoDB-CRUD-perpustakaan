const router = require("express").Router();
const perpustakaanController = require("../controllers/perpustakaanController");

router.get("/", perpustakaanController.viewPerpustakaan); 
router.post("/", perpustakaanController.addPerpustakaan);
router.put("/", perpustakaanController.editPerpustakaan);
router.delete("/:id", perpustakaanController.deletePerpustakaan);

module.exports = router;