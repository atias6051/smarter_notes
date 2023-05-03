from .db import db, environment, SCHEMA, add_prefix_for_prod
import json

class Note(db.Model):
    __tablename__ = 'notes'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')),nullable=False)
    title = db.Column(db.String(), nullable=False)
    content = db.Column(db.Text)

    user = db.relationship("User",back_populates='notes')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'content': json.loads(self.content)
        }
