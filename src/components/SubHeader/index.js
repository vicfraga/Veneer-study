/* Core */
import React, { Component } from "react";

/* Presentational */
import { View, Text, Image, TouchableOpacity, ListView } from "react-native";
import Button from "../button";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";

import buttonstyle from "../button/styles";

class SubHeader extends Component {
  state = {
    following: false
  };

  render() {
    const nameIcon = this.state.following ? "ios-checkmark" : "ios-person-add";
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.avatar}
            source={{
              uri:
                "https://heroichollywood.com/wp-content/uploads/2019/05/Spider_Man_Far_From_Home_Tom_Holland_Jake_Gyllenhaal.jpg"
            }}
          />

          <View style={styles.profileInfo}>
            <View style={styles.numbers}>
              <View style={styles.numbersItem}>
                <Text style={styles.info}>100</Text>
                <Text style={styles.bio}>Publicações</Text>
              </View>
              <View style={styles.numbersItem}>
                <Text style={styles.info}>22M</Text>
                <Text style={styles.bio}>Seguidores</Text>
              </View>
              <View style={styles.numbersItem}>
                <Text style={styles.info}>249</Text>
                <Text style={styles.bio}>Seguindo</Text>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <Button style={styles.firstButton}>mensagem</Button>
              <TouchableOpacity
                style={[buttonstyle.container]}
                onPress={() => {
                  this.setState(state => {
                    return { following: !state.following };
                  });
                }}
              >
                <Icon
                  name={nameIcon}
                  style={[buttonstyle.text, buttonstyle[`icon-outline`]]}
                />
              </TouchableOpacity>

              <TouchableOpacity style={[buttonstyle.container, buttonstyle.space]}>
                <Icon
                  name={'ios-arrow-down'}
                  style={[buttonstyle.text, buttonstyle[`icon-outline`]]}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.bio}>
              homem aranha / melhor amigo da vizinhança e melhor heroi da
              marvel.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default SubHeader;
