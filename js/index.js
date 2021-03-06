// Select

// Pass single element
const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
});

// Map

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [48.87105359302263, 2.3572444290563674],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14,
    controls: []
  });
  // Создание геообъекта с типом точка (метка).
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [48.87219657376512, 2.354223999999991] // координаты точки
    }
  });

  var myPlacemark = new ymaps.Placemark([48.87219657376512, 2.354223999999991], {}, {
    iconLayout: 'default#image',
    iconImageHref: '/img/Subtract.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
  });

  // Размещение геообъекта на карте.
  // myMap.geoObjects.add(myGeoObject); 
  myMap.geoObjects.add(myPlacemark);
}

// Scroll-bar

new SimpleBar(document.getElementById('custom-scroll'), {
  scrollbarMinSize: 70,
  scrollbarMaxSize: 70,
})

// Mask

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

// Form

new JustValidate('.form', {
  colorWrong: '#FF5C00',
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    tel: {
      required: true,
      function(name, value) {
        const phone = selector.inputmask.unmaskedvalue()
        console.log(phone)
        return Number(phone) && phone.length === 10
      }
    },
    mail: {
      required: true,
      email: true
    },
  },
  messages: {
    name: {
      minLength: 'Как вас зовут?',
      required: 'Как вас зовут?',
    },
    mail: {
      required: 'Укажите ваш e-mail',
      email: 'Укажите ваш e-mail'
    },
    tel: 'Укажите ваш телефон',
  },


});


