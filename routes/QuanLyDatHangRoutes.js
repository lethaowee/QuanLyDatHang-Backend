const ctdhController = require('../controller/ctdhController');
const express = require('express');
const dhController = require('../controller/dhController');
const hhController = require('../controller/hhController');
const hhhController = require('../controller/hhhController');
const khController = require('../controller/khController');
const nvController = require('../controller/nvController');

const router = express.Router();

router
  .route('/ctdh')
  .get(ctdhController.getAllChiTietDatHang)
  .post(ctdhController.createChiTietDatHang);
router
  .route('/ctdh/mshh/:mshh')
  .delete(ctdhController.deleteCTDHTheoMSHH);
router
  .route('/ctdh/:id/:id1')
  .get(ctdhController.getOneChiTietDatHang)
  .delete(ctdhController.deleteChiTietDatHang);

router
  .route('/dh')
  .get(dhController.getAllDatHang)
  .post(dhController.createDatHang);
router
  .route('/dh/:id')
  .get(dhController.getOneDatHang)
  .patch(dhController.updateDatHang)
  .delete(dhController.deleteDatHang);

router
  .route('/hh')
  .get(hhController.getAllHangHoa)
  .post(hhController.createHangHoa);
router
  .route('/hh/:id')
  .get(hhController.getOneHangHoa)
  .patch(hhController.updateHangHoa)
  .delete(hhController.deleteHangHoa);

router
  .route('/hhh')
  .get(hhhController.getAllHinhHangHoa)
  .post(hhhController.createHinhHangHoa);
router
  .route('/hhh/mshh/:mshh')
  .get(hhhController.getOneHinhHangHoaByMSHH)
  .delete(hhhController.deleteHinhHangHoaTheoMSHH);
router
  .route('/hhh/:id')
  .get(hhhController.getOneHinhHangHoa)
  .patch(hhhController.updateHinhHangHoa)
  .delete(hhhController.deleteHinhHangHoa);


router
  .route('/kh')
  .get(khController.getAllKhachHang)
  .post(khController.createKhachHang);
router
  .route('/kh/:id')
  .get(khController.getOneKhachHang)
  .patch(khController.updateKhachHang)
  .delete(khController.deleteKhachHang);

router
  .route('/nv')
  .get(nvController.getAllNhanVien)
  .post(nvController.createNhanVien);

router
  .route('/nv/:id')
  .get(nvController.getOneNhanVien)
  .patch(nvController.updateNhanVien)
  .delete(nvController.deleteNhanVien);
module.exports = router;
