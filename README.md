# Currency Converter App

## Overview

This React Native application allows users to convert between multiple currencies using live exchange rates. It provides a user-friendly interface, supports persistent data storage, and implements error handling for a smooth user experience.

## Features

- Support for 10 different currencies (USD, EUR, GBP, CAD, NGN, JPY, AUD, CNY, INR, ZAR)
- Real-time currency conversion using up-to-date exchange rates
- User-friendly interface with dropdown selectors for currencies
- Persistent storage of user's last selected currencies
- Offline support with cached exchange rates
- Error handling for API failures and network issues

## Tech Stack

- React Native
- TypeScript
- Axios for API calls
- AsyncStorage for local data persistence
- Jest and React Native Testing Library for testing

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm (v6 or later)
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/currency-converter-app.git
   cd currency-converter-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. iOS specific setup:
   ```
   cd ios && pod install && cd ..
   ```

4. Set up your API key:
   - Sign up for an API key at [ExchangeRate-API](https://www.exchangerate-api.com/)
   - Create a `.env` file in the root directory
   - Add your API key to the `.env` file:
     ```
     API_KEY=your_api_key_here
     ```

## Running the App

### For Android:

```
npx react-native run-android
```

### For iOS:

```
npx react-native run-ios
```

## Project Structure

```
currency-converter-app/
├── src/
│   ├── components/
│   │   ├── CurrencyInput/
│   │   ├── CurrencyPicker/
│   │   └── ErrorMessage/
│   ├── screens/
│   │   └── HomeScreen/
│   ├── services/
│   │   └── api/
│   ├── utils/
│   ├── constants/
│   └── store/
├── __tests__/
├── android/
├── ios/
├── App.tsx
└── package.json
```

## Testing

To run the tests:

```
npm test
```

## Building for Production

### Android

1. Generate a signing key:
   ```
   keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
   ```

2. Set up gradle variables:
   - Place the `my-release-key.keystore` file under the `android/app` directory.
   - Edit the file `~/.gradle/gradle.properties` and add the following:
     ```
     MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
     MYAPP_RELEASE_KEY_ALIAS=my-key-alias
     MYAPP_RELEASE_STORE_PASSWORD=*****
     MYAPP_RELEASE_KEY_PASSWORD=*****
     ```

3. Build the app:
   ```
   cd android
   ./gradlew assembleRelease
   ```

The APK can then be found under `android/app/build/outputs/apk/release/app-release.apk`

### iOS

1. Open your project in Xcode by running `open ios/YourProjectName.xcworkspace`
2. Select "Any iOS Device" as the build target
3. Go to Product > Archive
4. Follow the instructions to distribute your app

## Contributing

Contributions to the Currency Converter app are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/your-username/currency-converter-app](https://github.com/your-username/currency-converter-app)

## Acknowledgements

- [ExchangeRate-API](https://www.exchangerate-api.com/)
- [React Native](https://reactnative.dev/)
- [Axios](https://axios-http.com/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)