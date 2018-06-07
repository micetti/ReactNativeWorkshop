export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      picked: 'planets',
    };
  }

  render() {
    return (
      <Picker
        selectedValue={this.state.picked}
        onValueChange={(itemValue, itemIndex) => this.setState({ picked: itemValue })}
        style={{ backgroundColor: 'black', height: 44 }}
        itemStyle={{ color: 'yellow', height: 44 }}
      >
        <Picker.Item label="planets" value="planets" />
        <Picker.Item label="species" value="species" />
        <Picker.Item label="starships" value="starships" />
      </Picker>
    );
  }
}
