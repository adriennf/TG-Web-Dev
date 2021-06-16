// Var is een oude manier van variabelen aanmaken - tegenwoordig wordt het vermeden ivm veiligheidsrisico’s. Als je dan toch een variabele buiten { Local Scope } nodig hebt, houden const/let ze in Script Scope. Dat doet voor je code hetzelfde en is een stuk veiliger.
{
    var varScope; // Global scope
    let letScope; // Local scope
    const constScope = true; // Local scope
}
var varScope; // Global scope
let letScope; // Global/Script scope
const constScope = true; // Global/Script scope

// Als je geen keyword gebruikt bij het aanmaken van een variabele, maakt JavaScript er automatisch een var van. Dit is dus heel gevaarlijk! Declareer veilig, declareer let of const.
