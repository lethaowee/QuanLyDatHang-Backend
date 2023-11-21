const con = require('../models/database');

exports.getAllHinhHangHoa = async (req, res) => {
  try {
    await con.query('select * from hinhhanghoa', (err, result, field) => {
      var hinhhanghoa = result;
      if (err) throw err;
      res.status(200).json({
        status: 'success',
        total: hinhhanghoa.length,
        data: {
          hinhhanghoa,
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
exports.getOneHinhHangHoa = async (req, res) => {
  try {
    await con.query('select * from hinhhanghoa where MaHinh =' + req.params.id, (err, result, field) => {
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
exports.getOneHinhHangHoaByMSHH = async (req, res) => {
  try {
    await con.query('select * from hinhhanghoa where MSHH =' + req.params.mshh, (err, result, field) => {
      var hinhhanghoa = result;
      if (err) throw err;
      res.status(200).json({
        status: 'success',
        total: hinhhanghoa.length,
        data: {
          hinhhanghoa,
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
exports.updateHinhHangHoa = async (req, res) => {
  try {
    var sql = `UPDATE hinhhanghoa SET TenHinh ='${req.body.TenHinh}' WHERE MaHinh = ${req.params.id}`;
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
exports.createHinhHangHoa = async (req, res) => {
  try {
    var sql = `INSERT INTO hinhhanghoa (MaHinh, TenHinh, MSHH) VALUES ('${req.body.MaHinh}', '${req.body.TenHinh}', '${req.body.MSHH}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.status(200).json({
        status: 'success',
        data: {
          hinhhanghoa: result,
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
exports.deleteHinhHangHoa = async (req, res) => {
  try {
    var sql = `DELETE FROM hinhhanghoa WHERE MaHinh = ${req.params.id}`;
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

exports.deleteHinhHangHoaTheoMSHH = async (req, res) => {
  try {
    var sql = `DELETE FROM hinhhanghoa WHERE MSHH = ${req.params.mshh}`;
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

