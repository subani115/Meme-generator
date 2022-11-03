import {Component} from 'react'
import {MainContainer, SubmitButton, TopHeading} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].displayText,
    formSubmitted: false,
  }

  changeImgUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  changeTopText = event => {
    this.setState({topText: event.target.value})
  }

  changeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  changeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {fontSize} = this.state
    this.setState(prevState => ({
      formSubmitted: !prevState.formSubmitted,
      fontSize,
    }))
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, formSubmitted} = this.state

    return (
      <MainContainer>
        <form onSubmit={this.submitForm}>
          <h1>Meme Generator</h1>
          <div>
            <label htmlFor="imgUrl">Image URL</label>
            <input
              type="text"
              id="imgUrl"
              placeholder="Enter the Image URL"
              value={imageUrl}
              onChange={this.changeImgUrl}
            />
          </div>
          <div>
            <label htmlFor="top-text">Enter Top Text</label>
            <input
              type="text"
              id="top-text"
              placeholder="Enter the Image URL"
              value={topText}
              onChange={this.changeTopText}
            />
          </div>
          <div>
            <label htmlFor="bottom-text">Enter Bottom Text</label>
            <input
              type="text"
              id="bottom-text"
              placeholder="Enter the Image URL"
              value={bottomText}
              onChange={this.changeBottomText}
            />
          </div>
          <div>
            <label htmlFor="font-size">Font Size</label>
            <select id="font-size" onChange={this.changeFontSize}>
              {fontSizesOptionsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Generate</button>
        </form>
        <SubmitButton
          formSubmitted={formSubmitted}
          data-testid="meme"
          imageUrl={imageUrl}
        >
          <TopHeading fontSize={fontSize}>{topText}</TopHeading>
          <TopHeading fontSize={fontSize}>{bottomText}</TopHeading>
        </SubmitButton>
      </MainContainer>
    )
  }
}
export default MemeGenerator
