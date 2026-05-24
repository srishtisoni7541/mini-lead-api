const leadModel = require("../models/lead.model");
const ApiError = require("../utils/apiError");

const createLead = async (req, res, next) => {
  try {
    const lead = await leadModel.create(req.body);

    res.status(201).json({
      success: true,
      data: lead,
    });
  } catch (error) {
    next(error);
  }
};

const getLeads = async (req, res, next) => {
  try {
    const page = Number(req.query.page) || 1;

    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const filter = {};

    if (req.query.status) {
      filter.status = req.query.status;
    }

    const [leads, total] = await Promise.all([
      leadModel.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),

      leadModel.countDocuments(filter),
    ]);

    res.json({
      success: true,

      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },

      data: leads,
    });
  } catch (error) {
    next(error);
  }
};

const updateLead = async (req, res, next) => {
  try {
    const lead = await leadModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!lead) {
      throw new ApiError(404, "Lead not found");
    }

    res.json({
      success: true,
      data: lead,
    });
  } catch (error) {
    next(error);
  }
};

const addNote = async (req, res, next) => {
  try {
    // ATOMIC UPDATE
    const lead = await leadModel.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          notes: {
            text: req.body.text,
          },
        },
      },
      {
        new: true,
      }
    );

    if (!lead) {
      throw new ApiError(404, "Lead not found");
    }

    res.json({
      success: true,
      data: lead,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createLead,
  getLeads,
  updateLead,
  addNote,
};