
import create from 'zustand'

const useGameStore = create((set)=> 
({

    // Switches
    // TODO: Tidy up names and functionality. checkSwitches looks bad.
    switchOrder: [],
    increaseSwitches: (color) => set((state) => ({ switchOrder: [...state.switchOrder, color] })),
    checkSwitches: () => set((state) => {
        if(state.switchOrder.length === 3)
        {
            if(JSON.stringify(state.switchOrder) == JSON.stringify(['green', 'yellow', 'red']) )
            {
                console.log('match')
            }
            else 
            {
                console.log('no match')
            }
        }
    }),
    resetSwitches: () => set((state) => ({ switchOrder: [] })),
    correctOrder: false,
    toggleCorrectOrder: () => set((state) => ({ correctOrder: !state.correctOrder})),

}))

export default useGameStore