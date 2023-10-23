const Course = require('../models/course.schema');
const {
  courseCreateValidator,
  courseUpdateValidator,
} = require('../validator/course.validator');

exports.createCourse = async (req, res) => {
  try {
    const { error, value } = courseCreateValidator(req.body);
    if (error) {
      return res.send({
        success: false,
        message: 'Validation Failed',
        error: error.details[0].message,
      });
    }

    const {
      name,
      duration,
      seatLeft,
      shortDescription,
      description,
      curriculum,
      brochureLink,
    } = value;

    const course = new Course({
      name,
      duration,
      seatLeft,
      shortDescription,
      description,
      curriculum,
      brochureLink,
    });

    const savedCourse = await course.save();

    res.status(201).json({
      success: true,
      message: 'Course created successfully',
      course: savedCourse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const { id: courseId } = req.params;
    const { error, value } = courseUpdateValidator(req.body);

    if (error) {
      return res.send({
        success: false,
        message: 'Validation Failed',
        error: error.details[0].message,
      });
    }

    const updatedCourse = await Course.findByIdAndUpdate(courseId, value, {
      new: true,
    });

    if (!updatedCourse) {
      return res.status(404).json({
        success: false,
        message: 'Course not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Course updated successfully',
      course: updatedCourse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json({
      success: true,
      courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

exports.getCourse = async (req, res) => {
  try {
    const { id: courseId } = req.params;
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found',
      });
    }

    res.status(200).json({
      success: true,
      course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const { id: courseId } = req.params;
    const deletedCourse = await Course.findByIdAndDelete(courseId);

    if (!deletedCourse) {
      return res.status(404).json({
        success: false,
        message: 'Course not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Course deleted successfully',
      course: deletedCourse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};
