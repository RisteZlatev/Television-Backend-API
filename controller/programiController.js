const Programi = require('../model/programi');

exports.getAllProgrami = async(req, res) => {
    try{
        const programi = await Programi.find();
        res.status(201).json({
            status:"Success",
            data: programi,
        });
    }catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message,
        });
    };
};

exports.getPrograma = async(req, res) => {
    try{
        const programa = await Programi.findById(req.params.id);
        res.status(201).json({
            status:"Success",
            data: programa,
        });
    }catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message,
        });
    };
};

exports.addPrograma = async(req, res) => {
    try{
        const programa = await Programi.create(req.body);
        res.status(201).json({
            status:"Success",
            data: programa,
        });
    }catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message,
        });
    };
};

exports.deletePrograma = async(req, res) => {
    try{
        await Programi.findByIdAndDelete(req.params.id);
        res.status(201).json({
            status:"Success",
        });
    }catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message,
        });
    };
};

exports.updatePrograma = async(req, res) => {
    try{
        const programa = await Programi.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(201).json({
            status:"Success",
            data: programa,
        });
    }catch(err){
        res.status(500).json({
            status: 'fail',
            message: err.message,
        });
    };
};