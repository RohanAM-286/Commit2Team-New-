# Commit2Team

## 📌 Overview
Commit2Team is our hackathon project built in **36 hours**.  
It uses **NLP + ML** to **analyze team communication in real-time**, calculate **team scores**, and suggest **balanced team configurations** for maximum productivity.

Our project stands out because it **quantifies engagement and performance**, going beyond typical messaging apps.

## ✨ Key Features
- 🗣️ **Message Analysis**: Detects sentiment, urgency, and intent in messages.
- 📊 **Real-Time Team Score**: Scores teams based on engagement, sentiment, and task completion.
- ⚖️ **Balanced Team Suggestions**: Recommends redistributing members for optimal collaboration.
- 🌐 **Live Dashboard**: Visualizes team communication, sentiment trends, and team scores.

## 🧠 NLP Concepts Implemented
1. Tokenization, Stopword Removal, Stemming & Lemmatization
2. Bag of Words (BoW) & TF-IDF
3. Word Embeddings (Word2Vec / GloVe)
4. Text Classification & Sentiment Analysis


---

## 🛠️ Tech Stack
- **Frontend**: React + TailwindCSS
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **ML/NLP**: Python (scikit-learn, NLTK, spaCy

---

## 🌐 API Endpoints

| Method | Endpoint                 | Description                                              |
| ------ | ------------------------ | -------------------------------------------------------- |
| POST   | `/api/auth/register`     | Register a new user                                      |
| POST   | `/api/auth/login`        | Login user                                               |
| GET    | `/api/teams/:teamId`     | Get team details & current score                         |
| POST   | `/api/messages`          | Send a new message                                       |
| GET    | `/api/messages/:teamId`  | Get all messages for a team                              |
| GET    | `/api/analytics/:teamId` | Get sentiment, team score, and balanced team suggestions |
| POST   | `/api/analytics/update`  | Trigger ML/NLP analysis & update team scores             |

---

## ⚡ NLP + ML Workflow

1. **User sends a message** → saved in `messages` collection.
2. **Backend processes the text**:

   * Tokenization, stopword removal, lemmatization
   * Convert text to numerical features (TF-IDF / embeddings)
3. **ML models predict**:
   * Team member clustering for balanced teams
4. **Update `analytics` & `teams` collections**:

   * Compute **teamScore** based on aggregated sentiment + engagement
   * Suggest team rebalancing if scores are uneven
5. **Frontend dashboard updates in real-time** via WebSockets.

---

## ⚡ Getting Started

```bash
# Clone repo
git clone https://github.com/<your-username>/Commit2Team.git
cd Commit2Team

# Install frontend dependencies
cd frontend
npm install
npm run dev

# Install backend dependencies
cd ../backend
pip install -r requirements.txt
python app.py
```

---

## 🎯 Team :Git Happens

* 👨‍💻 Rohan A M 
* 👩‍💻 Pushpanjal 
* 👨‍💻 Sai Amruth
* 👩‍💻Akul



## 💡 Future Scope

* 🤖 Integrate **LLMs (BERT/GPT)** for smarter suggestions
* 📱 Mobile app for team management
* 🌐 Expand to **multilingual support**


<img width="1901" height="869" alt="image" src="https://github.com/user-attachments/assets/aa96093e-cde1-4b4b-a95f-00c8a5b38998" />
<img width="1903" height="917" alt="image" src="https://github.com/user-attachments/assets/fdcf726e-9df6-4150-8433-41c847153ac6" />
<img width="1836" height="897" alt="image" src="https://github.com/user-attachments/assets/672ae4a7-a89e-45ca-9373-04100d49c645" />
<img width="1872" height="907" alt="image" src="https://github.com/user-attachments/assets/3158addb-fd8e-4244-8492-b8d399dbbbca" />
<img width="1850" height="900" alt="image" src="https://github.com/user-attachments/assets/5106353e-83b6-49d6-b9c4-f9a6ea520674" />
<img width="1846" height="917" alt="image" src="https://github.com/user-attachments/assets/af9a6afb-9353-4e06-a8f0-bde74d7718f3" />
<img width="1714" height="893" alt="image" src="https://github.com/user-attachments/assets/f6db3137-f85d-4b19-87e9-336b37476998" />
<img width="1781" height="839" alt="image" src="https://github.com/user-attachments/assets/c361bd8b-86f1-4c4a-92c8-cc8c44bfb343" />
<img width="1388" height="812" alt="image" src="https://github.com/user-attachments/assets/d2709a81-4cb0-4eeb-bc48-21cab9b037a5" />
<img width="1325" height="887" alt="image" src="https://github.com/user-attachments/assets/c1e9030a-064a-487a-bd08-609d9f274d37" />
<img width="1290" height="539" alt="image" src="https://github.com/user-attachments/assets/dd1a17bb-53eb-4a19-99d2-6e83b5802591" />
<img width="1318" height="631" alt="image" src="https://github.com/user-attachments/assets/c50fe358-9654-4e02-be79-af506809511a" />
<img width="1805" height="866" alt="image" src="https://github.com/user-attachments/assets/b775cda7-90be-4f21-96c8-7fdc68700c44" />
<img width="1701" height="897" alt="image" src="https://github.com/user-attachments/assets/6390fcc6-d53f-46bd-bac6-44b26048d9a0" />
<img width="1580" height="785" alt="image" src="https://github.com/user-attachments/assets/9387fec4-efc6-44f9-84ba-64cbe235a730" />
<img width="1725" height="595" alt="image" src="https://github.com/user-attachments/assets/c08d662d-baa2-44ed-8763-a552f8b47bff" />
<img width="1873" height="730" alt="image" src="https://github.com/user-attachments/assets/a8a5d0d2-5665-4b9e-af07-74f814b059fb" />
<img width="1871" height="722" alt="image" src="https://github.com/user-attachments/assets/2277b2d3-a5c9-49a5-a3b3-4109b2c52807" />
<img width="1865" height="676" alt="image" src="https://github.com/user-attachments/assets/2c820d65-7fe1-4f07-ad92-19a22a54088c" />
<img width="1833" height="613" alt="image" src="https://github.com/user-attachments/assets/d4a2abdd-726b-4dac-b102-7d75505707d2" />


















