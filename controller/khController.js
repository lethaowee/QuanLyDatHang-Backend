const con = require('../models/database');

exports.getAllKhachHang = async (req, res) => {
  try {

    await con.query('select * from khachhang', (err, result, field) => {
      var khachhang = result;
      if (err) throw err;
      res.status(200).json({
        status: 'success',
        total: khachhang.length,
        data: {
          khachhang,
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
exports.getOneKhachHang = async (req, res) => {
  try {
    await con.query('select * from khachhang where MSKH =' + req.params.id, (err, result, field) => {
      var khachhang = result;
      if (err) throw err;
      res.status(200).json({
        status: 'success',
        total: khachhang.length,
        data: {
          khachhang,
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
exports.updateKhachHang = async (req, res) => {
  try {
    var sql = `UPDATE khachhang SET HoTenKH ='${req.body.HoTenKH}', Password = '${req.body.Password}', DiaChi = '${req.body.DiaChi}', SoDienThoai = '${req.body.SoDienThoai}' WHERE MSKH = ${req.params.id}`;
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
exports.createKhachHang = async (req, res) => {
  try {
    var sql = `INSERT INTO khachhang (MSKH, HoTenKH, Password, DiaChi, SoDienThoai) VALUES ('${req.body.MSKH}', '${req.body.HoTenKH}', '${req.body.Password}', '${req.body.DiaChi}', '${req.body.SoDienThoai}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.status(200).json({
        status: 'success',
        data: {
          khachhang: result,
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
exports.deleteKhachHang = async (req, res) => {
  try {
    var sql = `DELETE FROM khachhang WHERE MSKH = ${req.params.id}`;
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
