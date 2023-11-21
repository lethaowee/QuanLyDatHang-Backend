const con = require('../models/database');

exports.getAllChiTietDatHang = async (req, res) => {
  try {

    await con.query('select * from chitietdathang', (err, result, field) => {
      var chitietdathang = result;
      if (err) throw err;
      res.status(200).json({
        status: 'success',
        total: chitietdathang.length,
        data: {
          chitietdathang,
        },
      });
    })

  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.getOneChiTietDatHang = async (req, res) => {
  try {
    await con.query(`select * from chitietdathang where chitietdathang.SoDonDH=${req.params.id} AND  chitietdathang.MSHH=${req.params.id1}`, (err, result, field) => {
      var chitietdathang = result;
      if (err) throw err;
      res.status(200).json({
        status: 'success',
        total: chitietdathang.length,
        data: {
          chitietdathang,
        },
      });
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.createChiTietDatHang = async (req, res) => {
  try {
    var sql = `INSERT INTO chitietdathang (SoDonDH, MSHH, SoLuong, GiaDatHang, GiamGia) VALUES ('${req.body.SoDonDH}', '${req.body.MSHH}', '${req.body.SoLuong}', '${req.body.GiaDatHang}', '${req.body.GiamGia}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.status(200).json({
        status: 'success',
        data: {
          chitietdathang: result,
        },
      });
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.deleteChiTietDatHang = async (req, res) => {
  try {
    var sql = `DELETE FROM chitietdathang WHERE SoDonDH = ${req.params.id} and MSHH = ${req.params.id1}`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record deleted");
      res.status(200).json({
        status: 'success',
        message: 'delete success',
      });
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.deleteCTDHTheoMSHH = async (req, res) => {
  try {
    var sql = `DELETE FROM chitietdathang WHERE MSHH = ${req.params.mshh}`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record deleted");
      res.status(200).json({
        status: 'success',
        message: 'delete success',
      });
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};