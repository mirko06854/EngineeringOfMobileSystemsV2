const MyComponent = ({header1, header2, message}) => {
    const [toggle, setToggle] = useState(false)
    const myAlert = () => {
      alert("the message is: " + message)
    }
  
    return (
      <View>
        <View style={{flexDirection: "row", margin:10, padding: 10}}>
          <Text style={{fontSize:24}}>{header1}</Text>
          <Button title="message" onPress={myAlert} />
        </View>
        <View style={{flexDirection: "row", margin:10, padding: 10}}>
          {toggle ? <Text style={{fontSize:24}}>{header2}</Text> : null}
          <Button title="toggle" onPress={() => setToggle(!toggle)} />
        </View>
      </View>
    )
  }