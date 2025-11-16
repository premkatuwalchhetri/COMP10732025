// created a constructor function for toycars
function ToyCar(brand, model, color, scale, price, wheels, material, isElectric, year, features) {
    this.price = price;  
    this.color = color;           
    this.scale = scale;                    
    this.wheels = wheels;         
    this.material = material; 
    this.brand = brand;           
    this.model = model;               
    this.isElectric = isElectric;
    this.year = year;             
    this.features = features;
    // this is the method to describe the car
    this.describe = function() {
        return "Brand: " + this.brand + "\n" +
               "Model: " + this.model + "\n" +
               "Color: " + this.color + "\n" +
               "Scale: " + this.scale + "\n" +
               "Price: $" + this.price + "\n" +
               "Wheels: " + this.wheels + "\n" +
               "Material: " + this.material + "\n" +
               "Electric: " + this.isElectric + "\n" +
               "Year: " + this.year + "\n" +
               "Features: " + this.features.join(", ");
    };
}

