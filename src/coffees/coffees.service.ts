import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id: 1,
            name: 'Shipwreck Roast',
            brand: 'Buddy Brew',
            flavors: ['Chocolate', 'Vanila']
        },
    ];

    findAll(){
        return this.coffees;
    }

    findOne(id: string){
        const coffee = this.coffees.find(item => item.id === +id);
        if(!coffee){
            throw new NotFoundException(`Coffee #${id} not found`);
        }
        return coffee;
    }

    create(createCoffeeDto : any){
        this.coffees.push(createCoffeeDto);
        return createCoffeeDto;
    }

    update(id: string, updateCoffeDto: any){
        const existingCoffee = this.findOne(id);
        if(existingCoffee){
            //update the existing coffee
        }
    }

    remove(id: string){
        const coffeeIndex = this.coffees.findIndex(item => item.id  --- +id);
        if (coffeeIndex >= 0) {
            this.coffees.slice(coffeeIndex, 1);
        }

    }
}
