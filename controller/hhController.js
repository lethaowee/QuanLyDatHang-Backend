const con = require('../models/database');

exports.getAllHangHoa = async (req, res) => {
  try {

    await con.query('select * from hanghoa', (err, result, field) => {
      var hanghoa = result;
      if (err) throw err;
      res.status(200).json({
        status: 'success',
        total: hanghoa.length,
        data: {
          hanghoa,
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
exports.getOneHangHoa = async (req, res) => {
  try {
    await con.query('select * from hanghoa where MSHH =' + req.params.id, (err, result, field) => {
      var hanghoa = result;
      if (err) throw err;
      res.status(200).json({
        status: 'success',
        total: hanghoa.length,
        data: {
          hanghoa,
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
exports.updateHangHoa = async (req, res) => {
  try {
    var sql = `UPDATE hanghoa SET TenHangHoa ="${req.body.TenHangHoa}", MoTaHH = "${req.body.MoTaHH}", Gia = "${req.body.Gia}", SoLuongHang = "${req.body.SoLuongHang}", GhiChu = "${req.body.GhiChu}" WHERE MSHH = ${req.params.id}`;
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
exports.createHangHoa = async (req, res) => {
  try {
    var sql = `INSERT INTO hanghoa (MSHH, TenHangHoa, MoTaHH, Gia, SoLuongHang, GhiChu) VALUES ('${req.body.MSHH}', '${req.body.TenHangHoa}', '${req.body.MoTaHH}', '${req.body.Gia}', '${req.body.SoLuongHang}', '${req.body.GhiChu}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.status(200).json({
        status: 'success',
        data: {
          hanghoa: result,
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
exports.deleteHangHoa = async (req, res) => {
  try {
    var sql = `DELETE FROM hanghoa WHERE MSHH = ${req.params.id}`;
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
