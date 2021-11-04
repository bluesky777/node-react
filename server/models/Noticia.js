import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const NoticiaSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    descripcion: {
        type: String,
        required: true,
    },
    imagen: {
        type: String,
        required: true,
    },
    autor: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        default: 0,
    },
});

const Noticia = mongoose.model('noticia', NoticiaSchema);

export default Noticia;