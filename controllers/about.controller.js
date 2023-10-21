const About = require('../models/about.schema');

// Create a new about entry
exports.createAbout = async (req, res) => {
  try {
    const { title, description } = req.body;

    const about = new About({
      title,
      description,
    });

    const savedAbout = await about.save();

    res.status(200).json({
      success: true,
      message: 'About entry created successfully',
      about: savedAbout,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

// Get all about entries
exports.getAllAboutEntries = async (req, res) => {
  try {
    const aboutEntries = await About.find();

    res.status(200).json({
      success: true,
      aboutEntries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

// Get a specific about entry by ID
exports.getAboutEntryById = async (req, res) => {
  try {
    const { id } = req.params;
    const aboutEntry = await About.findById(id);

    if (!aboutEntry) {
      return res.status(404).json({
        success: false,
        message: 'About entry not found',
      });
    }

    res.status(200).json({
      success: true,
      aboutEntry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

// Update a specific about entry by ID
exports.updateAboutEntryById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const updatedAboutEntry = await About.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    if (!updatedAboutEntry) {
      return res.status(404).json({
        success: false,
        message: 'About entry not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'About entry updated successfully',
      aboutEntry: updatedAboutEntry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

// Delete a specific about entry by ID
exports.deleteAboutEntryById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAboutEntry = await About.findByIdAndDelete(id);

    if (!deletedAboutEntry) {
      return res.status(404).json({
        success: false,
        message: 'About entry not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'About entry deleted successfully',
      aboutEntry: deletedAboutEntry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};
