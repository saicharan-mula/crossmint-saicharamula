import Megaverse from '../models/Megaverse.js';

class MegaverseController {
    static async createPolyanet(req, res) {
        const { row, column } = req.body;
        try {
            const result = await Megaverse.createPolyanet(row, column);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deletePolyanet(req, res) {
        const { row, column } = req.body;
        try {
            const result = await Megaverse.deletePolyanet(row, column);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createSoloon(req, res) {
        const { row, column, color } = req.body;
        try {
            const result = await Megaverse.createSoloon(row, column, color);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteSoloon(req, res) {
        const { row, column } = req.body;
        try {
            const result = await Megaverse.deleteSoloon(row, column);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createCometh(req, res) {
        const { row, column, direction } = req.body;
        try {
            const result = await Megaverse.createCometh(row, column, direction);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteCometh(req, res) {
        const { row, column } = req.body;
        try {
            const result = await Megaverse.deleteCometh(row, column);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getGoalMap(req, res) {
        try {
            const result = await Megaverse.getGoalMap();
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }





    static async createFromGoalMap(req, res) {
        const goalMap = req.body.goal;

        try {
            for (let row = 0; row < goalMap.length; row++) {
                for (let column = 0; column < goalMap[row].length; column++) {
                    const item = goalMap[row][column];
                    

                    if (item === 'POLYANET') {
                        await Megaverse.createPolyanet(row, column);
                    } else if (item.includes('SOLOON')) {
                        const color = item.split('_')[0].toLowerCase();
                        await Megaverse.createSoloon(row, column, color);
                    } else if (item.includes('COMETH')) {
                        const direction = item.split('_')[0].toLowerCase();
                        await Megaverse.createCometh(row, column, direction);
                    }
                }
            }

            res.json({ message: 'Goal map processing complete' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
}

export default MegaverseController;
