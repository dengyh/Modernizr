/*!
{
  "name": "CSS Object Fit",
  "caniuse": "",X
  "property": "objectfit",
  "tags": ["css"],
  "notes": [{
    "name": "Opera Article on Object Fit",
    "href": "http://dev.opera.com/articles/view/css3-object-fit-object-position/"
  }]
}
!*/
define(['Modernizr', 'prefixed'], function( Modernizr, prefixed ) {
  Modernizr.addTest('objectfit', !!prefixed('objectFit'), { aliases: ['object-fit'] });
});
