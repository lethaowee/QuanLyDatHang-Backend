const con = require('../models/database');

exports.getAllDatHang = async (req, res) => {
  try {
    await con.query('select * from dathang', (err, result, field) => {
      var dathang = result;
      if (err) throw err;
      res.status(200).json({
        status: 'success',
        total: dathang.length,
        data: {
          dathang,
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
exports.getOneDatHang = async (req, res) => {
  try {
    await con.query('select * from dathang where SoDonDH =' + req.params.id, (err, result, field) => {
      var dathang = result;
      if (err) throw err;
      res.status(200).json({
        status: 'success',
        total: dathang.length,
        data: {
          dathang,
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
exports.updateDatHang = async (req, res) => {
  try {
    var sql = `UPDATE dathang SET NgayGH ='${req.body.NgayGH}', TrangThaiDH = '${req.body.TrangThaiDH}' WHERE SoDonDH = ${req.params.id}`;
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
exports.createDatHang = async (req, res) => {
  try {
    var sql = `INSERT INTO dathang (SoDonDH, MSKH, MSNV, NgayDH, NgayGH, TrangThaiDH) VALUES ('${req.body.SoDonDH}', '${req.body.MSKH}', '${req.body.MSNV}', '${req.body.NgayDH}', '${req.body.NgayGH}', '${req.body.TrangThaiDH}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.status(200).json({
        status: 'success',
        data: {
          dathang: result,
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
exports.deleteDatHang = async (req, res) => {
  try {
    var sql = `DELETE FROM dathang WHERE SoDonDH = ${req.params.id}`;
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
