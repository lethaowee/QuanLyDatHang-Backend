const con = require('../models/database');

exports.getAllNhanVien = async (req, res) => {
  try {
    await con.query('select * from nhanvien', (err, result, field) => {
      var nhanvien = result;
      if (err) throw err;
      res.status(200).json({
        status: 'success',
        total: nhanvien.length,
        data: {
          nhanvien,
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
exports.getOneNhanVien = async (req, res) => {
  try {
    await con.query('select * from nhanvien where MSNV =' + req.params.id, (err, result, field) => {
      var nhanvien = result;
      if (err) throw err;
      res.status(200).json({
        status: 'success',
        total: nhanvien.length,
        data: {
          nhanvien,
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
exports.updateNhanVien = async (req, res) => {
  try {
    var sql = `UPDATE nhanvien SET HoTenNV ='${req.body.HoTenNV}', Password = '${req.body.Password}', ChucVu = '${req.body.ChucVu}', DiaChi = '${req.body.DiaChi}', SoDienThoai = '${req.body.SoDienThoai}' WHERE MSNV = ${req.params.id}`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.status(200).json({
        status: 'success',
        data: {
          nhanvien: result,
        },
      });
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
}
exports.createNhanVien = async (req, res) => {
  try {
    var sql = `INSERT INTO nhanvien (MSNV, HoTenNV, Password, ChucVu, DiaChi, SoDienThoai) VALUES ('${req.body.MSNV}', '${req.body.HoTenNV}', '${req.body.Password}', '${req.body.ChucVu}', '${req.body.DiaChi}', '${req.body.SoDienThoai}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.status(200).json({
        status: 'success',
        data: {
          nhanvien: result,
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
exports.deleteNhanVien = async (req, res) => {
  try {
    var sql = `DELETE FROM nhanvien WHERE MSNV = ${req.params.id}`;
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
