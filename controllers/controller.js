const supabase = require('../config/conexion');

exports.inicio = async (req, res) => {
    res.render('pages/saludar');
}
exports.saludar = async (req, res) => {
    try {
        const data = await supabase .from('Productos') .select('*');

        if (!data) return alert('Error');

        let saludo = "Aquí Nodejs con Supabase";
        console.log(data);

        res.render('pages/saludar', { 
            saludo: saludo,
            productos: data
        });

    } catch {
        console.error("Error");
    }
};