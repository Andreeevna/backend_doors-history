"use strict";

var products = [{
  id: 0,
  name: 'Фигарея 1 ПДГ',
  desc: 'Фигарея является своеобразным современным переосмыслением неоклассического стиля. Футуристическое решение для Вашего интерьера: оригинальность скошенных линий и форм в сочетании с бархатным декором Soft Touch сделают двери главным акцентом в помещении. Фигарею отличает скошенный декоративный багет и  филенка геометрической формы, придающая дверным полотнам дополнительный архитектурный объём. В моделях с расстекловкой этот объём создаётся благодаря багету со скосом, чтобы свет мог красиво преломлятся и рассеиваться в пространстве.',
  coverage: '	Покрытие Soft Touch / Экошпон',
  images: ['https://res.cloudinary.com/dsoxasi6c/image/upload/v1696524895/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/101/%D0%B3%D0%BB%D1%83%D1%85%D0%B0%D1%8F/brs2j0phiv5s6gofkae5.jpg', 'https://res.cloudinary.com/dsoxasi6c/image/upload/v1696524895/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/101/%D0%B3%D0%BB%D1%83%D1%85%D0%B0%D1%8F/rpgqyulhnshjirkqc1o6.jpg', 'https://res.cloudinary.com/dsoxasi6c/image/upload/v1696524895/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/101/%D0%B3%D0%BB%D1%83%D1%85%D0%B0%D1%8F/ggysrpmcn9ms956jagh3.jpg', 'https://res.cloudinary.com/dsoxasi6c/image/upload/v1696524895/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/101/%D0%B3%D0%BB%D1%83%D1%85%D0%B0%D1%8F/gwrhhkyz0xievy7ihjkc.jpg'],
  collection: 'Неоклассика'
}, {
  id: 1,
  name: 'Фигарея 1 ПДО/М',
  desc: 'Фигарея является своеобразным современным переосмыслением неоклассического стиля. Футуристическое решение для Вашего интерьера: оригинальность скошенных линий и форм в сочетании с бархатным декором Soft Touch сделают двери главным акцентом в помещении. Фигарею отличает скошенный декоративный багет и  филенка геометрической формы, придающая дверным полотнам дополнительный архитектурный объём. В моделях с расстекловкой этот объём создаётся благодаря багету со скосом, чтобы свет мог красиво преломлятся и рассеиваться в пространстве.',
  coverage: '	Покрытие Soft Touch / Экошпон',
  images: ['https://res.cloudinary.com/dsoxasi6c/image/upload/v1696524868/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/101/%D0%BD%D0%B0%D0%BF%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8%D0%BD%D1%83/wvjg6zmnx1yu5fvf1rem.jpg', 'https://res.cloudinary.com/dsoxasi6c/image/upload/v1696524868/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/101/%D0%BD%D0%B0%D0%BF%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8%D0%BD%D1%83/mxbgreccdxskprnilh93.jpg', 'https://res.cloudinary.com/dsoxasi6c/image/upload/v1696524868/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/101/%D0%BD%D0%B0%D0%BF%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8%D0%BD%D1%83/rbi25huv3quzgaxyuu24.jpg', 'https://res.cloudinary.com/dsoxasi6c/image/upload/v1696524868/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/101/%D0%BD%D0%B0%D0%BF%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8%D0%BD%D1%83/ti2uwgjoyxsujrg0vkpq.jpg'],
  collection: 'Неоклассика'
}, {
  id: 1,
  name: 'Фигарея 1 ПДО',
  desc: 'Фигарея является своеобразным современным переосмыслением неоклассического стиля. Футуристическое решение для Вашего интерьера: оригинальность скошенных линий и форм в сочетании с бархатным декором Soft Touch сделают двери главным акцентом в помещении. Фигарею отличает скошенный декоративный багет и  филенка геометрической формы, придающая дверным полотнам дополнительный архитектурный объём. В моделях с расстекловкой этот объём создаётся благодаря багету со скосом, чтобы свет мог красиво преломлятся и рассеиваться в пространстве.',
  coverage: '	Покрытие Soft Touch / Экошпон',
  images: ['https://res.cloudinary.com/dsoxasi6c/image/upload/v1696524912/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/101/%D0%BE%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F/o9ntywe3oepedzzj2clg.jpg', 'https://res.cloudinary.com/dsoxasi6c/image/upload/v1696524912/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/101/%D0%BE%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F/prpnlwmpkupo84js9xwi.jpg', 'https://res.cloudinary.com/dsoxasi6c/image/upload/v1696524912/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/101/%D0%BE%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F/ovhhwuwfbmfrkbmrgkrh.jpg', 'https://res.cloudinary.com/dsoxasi6c/image/upload/v1696524912/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/101/%D0%BE%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F/exxgix7en0sbptdv1jiq.jpg'],
  collection: 'Неоклассика'
}, {
  id: 2,
  name: 'Фигарея 4 ПДГ',
  desc: 'Фигарея является своеобразным современным переосмыслением неоклассического стиля. Футуристическое решение для Вашего интерьера: оригинальность скошенных линий и форм в сочетании с бархатным декором Soft Touch сделают двери главным акцентом в помещении. Фигарею отличает скошенный декоративный багет и  филенка геометрической формы, придающая дверным полотнам дополнительный архитектурный объём. В моделях с расстекловкой этот объём создаётся благодаря багету со скосом, чтобы свет мог красиво преломлятся и рассеиваться в пространстве.',
  coverage: '	Покрытие Soft Touch / Экошпон',
  images: ['https://res.cloudinary.com/dsoxasi6c/image/upload/v1696524963/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/104/%D0%B3%D0%BB%D1%83%D1%85%D0%B0%D1%8F/zouyiywg0gcrdksrjuj4.jpg', 'https://res.cloudinary.com/dsoxasi6c/image/upload/v1696524963/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/104/%D0%B3%D0%BB%D1%83%D1%85%D0%B0%D1%8F/gbcoxtbyra9kqkx83v74.jpg', 'https://res.cloudinary.com/dsoxasi6c/image/upload/v1696524963/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/104/%D0%B3%D0%BB%D1%83%D1%85%D0%B0%D1%8F/aduter64mtoprcm13ol4.jpg', 'https://res.cloudinary.com/dsoxasi6c/image/upload/v1696524963/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/104/%D0%B3%D0%BB%D1%83%D1%85%D0%B0%D1%8F/stsitevdwsj7umwhwhtr.jpg'],
  collection: 'Неоклассика'
}, {
  id: 3,
  name: 'Фигарея 4 ПДО',
  desc: 'Фигарея является своеобразным современным переосмыслением неоклассического стиля. Футуристическое решение для Вашего интерьера: оригинальность скошенных линий и форм в сочетании с бархатным декором Soft Touch сделают двери главным акцентом в помещении. Фигарею отличает скошенный декоративный багет и  филенка геометрической формы, придающая дверным полотнам дополнительный архитектурный объём. В моделях с расстекловкой этот объём создаётся благодаря багету со скосом, чтобы свет мог красиво преломлятся и рассеиваться в пространстве.',
  coverage: '	Покрытие Soft Touch / Экошпон',
  images: ['https://res.cloudinary.com/dsoxasi6c/image/upload/v1696524992/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/104/%D0%BE%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F/evbk66dcnmej7ahvhbb1.jpg', 'https://res.cloudinary.com/dsoxasi6c/image/upload/v1696524992/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/104/%D0%BE%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F/e2o8qinysb7bt2locncg.jpg', 'https://res.cloudinary.com/dsoxasi6c/image/upload/v1696524992/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/104/%D0%BE%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F/dpdxkzy4jdsds5lmcmwl.jpg', 'https://res.cloudinary.com/dsoxasi6c/image/upload/v1696524992/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/104/%D0%BE%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F/ikiklk1nxrtnmmhkcmqx.jpg'],
  collection: 'Неоклассика'
}, {
  id: 4,
  name: 'Фигарея 4 ПДО/M',
  desc: 'Фигарея является своеобразным современным переосмыслением неоклассического стиля. Футуристическое решение для Вашего интерьера: оригинальность скошенных линий и форм в сочетании с бархатным декором Soft Touch сделают двери главным акцентом в помещении. Фигарею отличает скошенный декоративный багет и  филенка геометрической формы, придающая дверным полотнам дополнительный архитектурный объём. В моделях с расстекловкой этот объём создаётся благодаря багету со скосом, чтобы свет мог красиво преломлятся и рассеиваться в пространстве.',
  coverage: '	Покрытие Soft Touch / Экошпон',
  images: ['https://res.cloudinary.com/dsoxasi6c/image/upload/v1696524978/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/104/%D0%BD%D0%B0%D0%BF%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8%D0%BD%D1%83/pck2uzylvyqj7srqhaiq.jpg', 'https://res.cloudinary.com/dsoxasi6c/image/upload/v1696524978/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/104/%D0%BD%D0%B0%D0%BF%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8%D0%BD%D1%83/nu7itignacih74vu5gdx.jpg', 'https://res.cloudinary.com/dsoxasi6c/image/upload/v1696524978/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/104/%D0%BD%D0%B0%D0%BF%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8%D0%BD%D1%83/qr92oqe14yqwxyubrndq.jpg', 'https://res.cloudinary.com/dsoxasi6c/image/upload/v1696524978/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/104/%D0%BD%D0%B0%D0%BF%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8%D0%BD%D1%83/svsjyykthehp6n4icap2.jpg'],
  collection: 'Неоклассика'
}, {
  id: 5,
  name: 'Фигарея 5 ПДГ',
  desc: 'Фигарея является своеобразным современным переосмыслением неоклассического стиля. Футуристическое решение для Вашего интерьера: оригинальность скошенных линий и форм в сочетании с бархатным декором Soft Touch сделают двери главным акцентом в помещении. Фигарею отличает скошенный декоративный багет и  филенка геометрической формы, придающая дверным полотнам дополнительный архитектурный объём. В моделях с расстекловкой этот объём создаётся благодаря багету со скосом, чтобы свет мог красиво преломлятся и рассеиваться в пространстве.',
  coverage: '	Покрытие Soft Touch / Экошпон',
  images: ['https://res.cloudinary.com/dsoxasi6c/image/upload/v1696525048/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/105/%D0%B3%D0%BB%D1%83%D1%85%D0%B0%D1%8F/sekcxzz2aigiiwi7pvz5.jpg', 'https://res.cloudinary.com/dsoxasi6c/image/upload/v1696525048/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/105/%D0%B3%D0%BB%D1%83%D1%85%D0%B0%D1%8F/yofcuukogwsidc37kqpp.jpg', 'https://res.cloudinary.com/dsoxasi6c/image/upload/v1696525048/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/105/%D0%B3%D0%BB%D1%83%D1%85%D0%B0%D1%8F/v7ii4aueo6tiznjwuuge.jpg'],
  collection: 'Неоклассика'
}, {
  id: 6,
  name: 'Фигарея 5 ПДО',
  desc: 'Фигарея является своеобразным современным переосмыслением неоклассического стиля. Футуристическое решение для Вашего интерьера: оригинальность скошенных линий и форм в сочетании с бархатным декором Soft Touch сделают двери главным акцентом в помещении. Фигарею отличает скошенный декоративный багет и  филенка геометрической формы, придающая дверным полотнам дополнительный архитектурный объём. В моделях с расстекловкой этот объём создаётся благодаря багету со скосом, чтобы свет мог красиво преломлятся и рассеиваться в пространстве.',
  coverage: '	Покрытие Soft Touch / Экошпон',
  images: ['https://res.cloudinary.com/dsoxasi6c/image/upload/v1696525065/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/105/%D0%BE%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F/qid7hfe6eyzgfkghphsg.jpg', 'https://res.cloudinary.com/dsoxasi6c/image/upload/v1696525065/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/105/%D0%BE%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F/azesxdkmygnzt9ceqquw.jpg', 'https://res.cloudinary.com/dsoxasi6c/image/upload/v1696525065/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/105/%D0%BE%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F/ghujyil6wczbuzugp1yi.jpg', 'https://res.cloudinary.com/dsoxasi6c/image/upload/v1696525065/neoclassic/%D1%84%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%8F/105/%D0%BE%D1%81%D1%82%D0%B5%D0%BA%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F/pf6gcp4cvvgqvmphpwel.jpg'],
  collection: 'Неоклассика'
}];
module.exports = products;