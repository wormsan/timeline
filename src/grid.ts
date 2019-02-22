export const GridUnit = 40
export class Grid {
    private _value = 0
    get value (): number {
        return this._value
    }
    constructor (n: number | Grid) {
        if (n instanceof Grid) {
            this._value = n.valueOf()
        } else {
            this._value = n * GridUnit
        }
    }
    add (g: Grid) : Grid {
        return new Grid((this._value + g.value) / GridUnit)
    }
    sub (g: Grid) : Grid {
        return new Grid((this._value - g.value) / GridUnit)
    }
    mul (g: Grid | number): Grid {
        if (g instanceof Number) {
            return new Grid(this._value * (g as number))
        } else {
            return new Grid((this._value / GridUnit) * ((g as Grid).value / GridUnit))
        }
    }
    div (g: Grid | number): Grid {
        if (g instanceof Number) {
            return new Grid(this._value / (g as number))
        } else {
            return new Grid((this._value / GridUnit) / ((g as Grid).value / GridUnit))
        }
    }
    valueOf (): number {
        return this.value
    }
    toString (): string {
        return this.value.toString()
    }
}
