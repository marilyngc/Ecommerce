
import combo from "../../assets/products/combo.jpg"
import contornoDeOjos from "../../assets/products/contornoDeOjos.jpg"
import hidratante from "../../assets/products/hidratante.jpg"
import hidratante1 from "../../assets/products/hidratante1.jpg"
import serum from "../../assets/products/serum.jpg"
import sunProtect from "../../assets/products/sunProtect.jpg"
import  combos2 from "../../assets/products/combos2.jpg"
import  hidratante2 from "../../assets/products/hidratante2.jpg"
import  sunProtects from "../../assets/products/sunProtects.jpg"
import  serum1 from "../../assets/products/serum1.jpg"
import  combo3 from "../../assets/products/combo3.jpg"
import  contorno1 from "../../assets/products/contorno1.jpg"
import  serum2 from "../../assets/products/serum2.jpg"
import  protector3 from "../../assets/products/protector3.jpg"
import hidratante5 from "../../assets/products/hidratante5.jpg"



export const MOCK_DATA = [
  {
    id: 1,
    nombre: "Crema hidratante + Serum + Leche limpiadora",
    descripcion: "Lorem ipsum dolor sit amet, consectetur ",
    precio: "7.599",
    category: "combos",
    img: combo,
    stock:5,
    sizes : [
      {
        value: "S",
        label: "Small"
      },
      {
        value: "M",
        label: "Medium"
      },
      {
        value: "L",
        label: "Largue"
      }
     ],
  },
  {
    id: 2,
    nombre: "Contorno de ojos",
    descripcion: "Lorem ipsum dolor sit amet, consectetur ",
    precio:"3.999",
    category: "contorno",
    img: contornoDeOjos,
    stock:5,
    sizes:  [
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      }
     ],
  },
  {
    id: 3,
    nombre: "Crema hidratante de chía",
    descripcion: "Lorem ipsum dolor sit amet, consectetur ",
    precio:"2.700",
    category: "hidratante",
    img: hidratante,
    stock:5,
    sizes:[
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      }
     ],
  },
  {
    id: 4,
    nombre: "Crema hidratante de quinoa",
    descripcion: "Lorem ipsum dolor sit amet, consectetur ",
    precio: "3.999",
    category: "hidratante",
    img: hidratante1,
    stock:5,
    sizes:[
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      }
     ],
  },

  {
    id: 5,
    nombre: "Serum balance",
    descripcion: "El Serum Balance es un concentrado de niacinamida (vitamina B3) + ácido salicílico, potenciados con gluconato de zinc y raíz de Bardana. Con efecto antiséptico y antibacteriano para la piel. ",
    precio:"7.299",
    category: "serum",
    img:serum,
    stock:2,
    sizes:[
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      }
     ],
  },
  {
    id: 6,
    nombre: "Protector solar +50",
    descripcion: "Lorem ipsum dolor sit amet, consectetur ",
    precio:"4.345",
    category: "protector",
    img: sunProtect,
    stock:5,
    sizes:[
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      }
     ],
  },
  {
    id: 7,
    nombre: "Protector solar con color",
    descripcion: "Libre de parabenos. Los productos libres de parabenos son una buena opción para el cuidado de pieles sensibles o para quienes eligen productos sin conservantes artificial",
    precio:"4.306",
    category: "protector",
    img: sunProtects,
    stock:1,
    sizes:[
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      }
     ],
  },
  {
    id: 8,
    nombre: "Combo leche limpiadora + contorno de ojos + protector solar",
    descripcion: "Lorem ipsum dolor sit amet, consectetur ",
    precio: "5.999",
    category: "combos",
    img: combos2,
    stock:5,
    sizes:[
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      }
     ],
  },
  {
    id: 9,
    nombre: "Mascarilla purificante  ",
    descripcion: "Nuestra Mascarilla Purificante ofrece una hidratación intensa, reduce y previene el acné, mejora la textura y tono de la piel, aporta luminosidad y firmeza, purifica y equilibra la piel. ¡Descubre una piel más radiante y saludable!",
    precio: "7.699",
    category: "hidratante",
    img: hidratante2,
    stock:6,
    sizes:[
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      }
     ],
  },
  {
    id: 10,
    nombre: "Serum antiage",
    descripcion: "El Serum es ideal para quienes buscan prevenir o suavizar líneas, y mejorar turgencia, firmeza y elasticidad. Además, brinda humectación intensa, por lo que es uno de los preferidos de quienes buscan hidratación 100 % oil-free. ",
    precio: "7.299",
    category: "serum",
    img: serum1,
    stock:5,
    sizes : [
      {
        value: "S",
        label: "Small"
      },
      {
        value: "M",
        label: "Medium"
      },
      {
        value: "L",
        label: "Largue"
      }
     ],
  },
  {
    id: 11,
    nombre: "Protector solar + labial humectante",
    descripcion: "Lorem ipsum dolor sit amet, consectetur ",
    precio: "3.500",
    category: "combos",
    img: combo3,
    stock:5,
    sizes:[
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      }
     ],
  },
  {
    id: 12,
    nombre: " Contorno de ojos y boca con extracto del bulbo de flores de azafrán",
    descripcion: "Su composición contiene una gran concentración de los activos naturales más innovadores que, aplicados sobre la piel de forma simultánea, tratan ojeras, párpados caídos, líneas de expresión, dinámicas y estáticas, pérdida de elasticidad, bolsas, inflamación, pigmentación desigual y manchas.  ",
    precio: "3.050",
    category: "contorno",
    img: contorno1,
    stock:5,
    sizes:[
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      }
     ],
  },
  {
    id: 13,
    nombre: "Serum iluminador",
    descripcion: "El Serum es un poderoso humectante multivitamínico creado a partir de extractos de la fruta de Limón, Manzana y Semillas de Uva.",
    precio: "2.700",
    category: "serum",
    img: serum2,
    stock:3,
    sizes:[
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      }
     ],
  },
  {
    id: 14,
    nombre: "Crema gel hidratante UV  ",
    descripcion: "En términos de protección UV, la Vitamina E puede absorber los rayos UVB dando protección. Con la adición de vitamina C, ambos pueden proporcionar una mejor defensa contra los efectos de los rayos UV y ayudar a prevenir y reducir el envejecimiento prematuro de los radicales libres causados por el daño de los rayos UV.  ",
    precio: "7.399",
    category: "hidratante",
    img: hidratante5,
    stock:5,
    sizes:[
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      },
      {
        value: null,
        label: null
      }
     ],
  },
  {
    id: 15,
    nombre:"Protector solar en gel",
    descripcion: "Disfrutá sin preocupaciones del verano, protegiendo la piel de quienes más querés de los rayos ultravioletas del sol.    ",
    precio: "6.958",
    category: "protector",
    img: protector3,
    stock:2,
    sizes : [
      {
        value: "S",
        label: "Small"
      },
      {
        value: "M",
        label: "Medium"
      },
      {
        value: "L",
        label: "Largue"
      }
     ],
  },
];
