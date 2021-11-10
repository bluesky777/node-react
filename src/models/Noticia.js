import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
const Schema = mongoose.Schema;

const NoticiaSchema = new Schema({
    titulo: {
        type: String,
        required: true,
        default: function () {
            const num = Math.floor(Math.random() * 4);
            const descripciones = [
                'La tecnología de la información (TI)',
                'Frecuentemente, los términos',
                'La informática puede definirse como la ciencia',
                'Las computadoras electrónicas, usando tanto relés como válvulas'
            ];
            return descripciones[num];
        },
    },
    date: {
        type: Date,
        default: Date.now
    },
    descripcion: {
        type: String,
        required: true,
        default: function () {
            const num = Math.floor(Math.random() * 4);
            const descripciones = [
                'La tecnología de la información (TI) es la aplicación de ordenadores y equipos de telecomunicación para almacenar, recuperar, transmitir y manipular datos, con frecuencia utilizado en el contexto de los negocios u otras empresas. El término se utiliza como sinónimo para los computadores y las redes de computadoras, pero también abarca otras tecnologías de distribución de información, tales como la televisión y los teléfonos. Múltiples industrias están asociadas con las tecnologías de la información: hardware y software de computadoras, electrónica, semiconductores, internet, equipos de telecomunicación, el comercio electrónico y los servicios computacionales.',
                'Frecuentemente, los términos TI y TIC suelen usarse indistintamente: mientras que TI se refiere a tecnologías de la información, TIC implica, además, las destinadas a la comunicación. De esta forma, TI es un término más amplio, que engloba las TIC. "Las TI abarcan el dominio completo de la información, que incluye al hardware, al software, a los periféricos y a las redes. Un elemento cae dentro de la categoría de las TI cuando se usa con el propósito de almacenar, proteger, recuperar y procesar datos electrónicamente".1 Los seres humanos han estado almacenando, recuperando, manipulando y comunicando información desde que los sumerios en Mesopotamia desarrollaron la escritura, cerca del año 3000 a. C., pero el término tecnología de la información, en su significado moderno, hizo su aparición en 1958, en un artículo publicado en la revista Harvard Business Review. Sus autores, Harold J. Leavitt y Thomas L. Whisler, comentaron que “la nueva tecnología no tiene aún un nombre establecido. Deberíamos llamarla tecnología de la información (TI)”. Su definición consistía en tres categorías: técnicas de procesamiento, la aplicación de métodos estadísticos y matemáticos para la toma de decisión y la simulación del pensamiento de orden superior a través de programas computacionales.2​ Basándose en la tecnología de almacenamiento y procesamiento empleada, es posible distinguir cuatro eras del desarrollo de la TI: pre-mecánica (3000 a. C.-1450 d. C.), mecánica (1450-1840), electromecánica (1840-1940) y electrónica (1940 al presente).',
                'La informática puede definirse como la ciencia que se encarga del estudio de la obtención de información por medios automáticos. Para entender mejor esta definición, hace falta conocer lo que se entiende por información, datos y medios automáticos. Los datos son el conjunto de elementos que, a través de indicaciones, deben darse a una máquina para que los procese y ofrezca un resultado. La información es el conjunto de datos y los resultados que entrega la máquina. Un medio automático es una máquina que es capaz, por ella sola, de elaborar o procesar una cierta información sobre la base de unos ciertos datos de entrada que nos condicionarán los resultados del procesamiento de esta.',
                'Las computadoras electrónicas, usando tanto relés como válvulas, comenzaron a aparecer a comienzos de la década de 1940. La electromecánica Zuse Z3, terminada en 1941, fue la primera computadora programable del mundo, y, según los estándares modernos, una de las primeras máquinas que podrían ser consideradas de cómputo completa. Colossus, desarrollada durante la Segunda Guerra Mundial para desencriptar mensajes alemanes, fue la primera computadora electrónica digital. Aunque era programable, no era de uso general, habiendo sido diseñada para realizar una única tarea. Carecía además de la capacidad de almacenar su programa en una memoria; su programación se realizaba usando enchufes e interruptores para alterar su cableado interno. La primera computadora de programas almacenados electrónica digital reconocible fue la Máquina Experimental de Pequeña Escala de Mánchester (SSEM por su nombre en inglés: Manchester Small-Scale Experimental Machine), que ejecutó su primer programa el 21 de junio de 1948.'
            ];
            return descripciones[num];
        },
    },
    imagen: {
        type: String,
        required: true,
        default: function () {
            const num = Math.floor(Math.random() * (250 - 20)) + 20;
            return `https://picsum.photos/id/${num}/400/300`;
        },
    },
    autor: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
        default: function () {
            const num = Math.floor(Math.random() * (4 - 1)) + 1;
            const categorias = ['Deportes', 'Cultura', 'Economía', 'Tecnología'];
            return categorias[num];
        },
    },
    likes: {
        type: Number,
        default: function () {
            return Math.floor(Math.random() * (100 - 20)) + 20;
        },
    },
});

NoticiaSchema.plugin(mongoosePaginate);

const Noticia = mongoose.model('noticia', NoticiaSchema);

export default Noticia;