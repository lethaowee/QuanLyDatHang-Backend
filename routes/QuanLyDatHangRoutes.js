const express = require('express');
const ctdhController = require('../controller/ctdhController');
const dhController = require('../controller/dhController');
const hhController = require('../controller/hhController');
const hhhController = require('../controller/hhhController');
const khController = require('../controller/khController');
const nvController = require('../controller/nvController');

const router = express.Router();

router
  .route('/chitietdathang')
  .get(ctdhController.getAllChiTietDatHang)
  .post(ctdhController.createChiTietDatHang);
router
  .route('/chitietdathang/:id')
  .get(ctdhController.getOneChiTietDatHang)
router
  .route('/chitietdathang/:id/:id1')
  .delete(ctdhController.deleteChiTietDatHang);

router
  .route('/donhang')
  .get(dhController.getAllDatHang)
  .post(dhController.createDatHang);
router
  .route('/donhang/:id')
  .get(dhController.getOneDatHang)
  .delete(dhController.deleteDatHang);

router
  .route('/hanghoa')
  .get(hhController.getAllHangHoa)
  .post(hhController.createHangHoa);
router
  .route('/hanghoa/:id')
  .get(hhController.getOneHangHoa)
  .delete(hhController.deleteHangHoa);

router
  .route('/hinhhanghoa')
  .get(hhhController.getAllHinhHangHoa)
  .post(hhhController.createHinhHangHoa);
router
  .route('/hinhhanghoa/:id')
  .get(hhhController.getOneHinhHangHoa)
  .delete(hhhController.deleteHinhHangHoa);

router
  .route('/khachhang')
  .get(khController.getAllKhachHang)
  .post(khController.createKhachHang);
router
  .route('/khachhang/:id')
  .get(khController.getOneKhachHang)
  .delete(khController.deleteKhachHang);

router
  .route('/nhanvien')
  .get(nvController.getAllNhanVien)
  .post(nvController.createNhanVien);
router
  .route('/nhanvien/:id')
  .get(nvController.getOneNhanVien)
  .delete(nvController.deleteNhanVien);
module.exports = router;
