import {
  engine,
  Transform,
} from '@dcl/sdk/ecs'
import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'

// State to manage the current dynamic message
let message = 'Welcome to the game! Find the memory game!' // Updated default message

// Function to set up the UI renderer
export function setupUi() {
  ReactEcsRenderer.setUiRenderer(uiComponent)
}

// Function to update the dynamic message
export function updateMessage(newMessage: string) {
  message = newMessage
}

// UI Component definition
const uiComponent = () => (
  <UiEntity
    uiTransform={{
      width: 400, // Width of the main UI container
      height: 80, // Adjusted height
      margin: '10px 0 8px 200px', // Positioning of the UI
      padding: 5, // Padding inside the container
      position: { left: 40, top: 10 }, // Positioning using position property
    }}
    uiBackground={{
      color: Color4.Black(), // Background color for the container
    }}
  >
    <UiEntity
      uiTransform={{
        width: '100%', // Full width of the parent container
        height: '100%', // Full height of the parent container
        flexDirection: 'column', // Arranges child elements in a column
        alignItems: 'center', // Align items in the center horizontally
        justifyContent: 'space-between', // Spaces elements evenly
      }}
    >
      {/* Title of the UI */}
      <UiEntity
        uiTransform={{
          width: '100%', // Full width of the parent container
          height: 50, // Fixed height for the title
          margin: '8px 0', // Adds spacing around the title
        }}
        uiBackground={undefined} // No background for the title
        uiText={{
          value: 'Ultimate Game Party', // Title text
          fontSize: 20, // Font size for the title
          color: Color4.White(), // White font color for contrast
        }}
      />

      {/* Dynamic message area */}
      <Label
        value={message} // Message to display dynamically
        fontSize={14} // Font size for the message text
        uiTransform={{
          width: '100%',
          height: 40,
          margin: '8px 0',
        }} // Sizing and positioning
        color={Color4.White()} // Text color
      />
    </UiEntity>
  </UiEntity>
)

// Function to reset the memory game
function resetMemoryGame() {
  console.log('Memory Game Reset!') // Logs the reset action
  // Add logic here to reset the memory game state
}
