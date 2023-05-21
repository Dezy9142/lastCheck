const Student = require("../models/StudentSchema");

exports.getStudentData = async (req, res) => {
  try {
    const id = req.params.id;

    console.log("Id of student is:", id);
    const DATA = await Student.findOne({ id }).lean();

    console.log("Printing Student data:", DATA);

    if (!DATA) {
      return res.status(404).json({
        success: false,
        message: "No Data Found with the given Id",
      });
    }

    res.status(200).json({
      success: true,
      data: DATA,
      message: `Get data of id: ${id}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "server error",
      message: err.message,
    });
  }
};
