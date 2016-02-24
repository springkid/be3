var projectsData = [
  {
    alg: 'alg-2016-0028',
    ref: 'Nexus 95 RPT Blanco marino',
    series: 'Nexus 95 RPT',
    cliente: 'Tomás Albalat',
    estado: 'PENDIENTE',
    createdOn: '24/02/2016 12:00',
    comentarios: {'24/02/2016 12:00' : 'Lacado Blanco, descuento 45% tarifa',
                  '24/02/2016 12:00' : 'Cruce reforzao exterior en todas las ventanas',
                  },
    docs: ''
  }, 
  {
    alg: 'alg-2016-0029',
    ref: 'AWS50 Schuco o similar',
    series: 'Domo 60 RT, Domo 125 RT',
    cliente: 'Cristalería Arenós',
    estado: 'PENDIENTE',
    createdOn: '24/02/2016 12:05',
    comentarios: {'24/02/2016 12:05' : 'Lacado Ral Estandar, descuento 45% tarifa',
                  '24/02/2016 12:05' : 'Todas las ventanas con tapajuntas',
                  },
    docs: ''
  },
  {
    alg: 'alg-2016-0030',
    ref: '',
    cliente: 'J.M. Pareja',
    estado: 'PENDIENTE',
    createdOn: '24/02/2016 12:12',
    comentarios: {'24/02/2016 12:12' : 'Lacado Blanco, pasar a Limpio precios de Almiñana'
                  },
    docs: ''
  }
];

Template.projectsList.helpers({
  //projects: projectsData
  projects: function() {
      return Projects.find({}, {sort: {'createdOn': -1}});
  }
});