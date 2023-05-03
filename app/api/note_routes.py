from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Note, db

note_routes = Blueprint('notes',__name__)

@note_routes.route('/')
@login_required
def get_notes():
    notes = Note.query.filter(Note.user_id == current_user.id).order_by(Note.created_at).all()
    return jsonify([note.to_dict() for note in notes])

@note_routes.route('/',methods=['POST'])
@login_required
def post_note():
    note_data = request.get_json()
    note = Note(
        user_id = current_user.id,
        title = note_data.get('title'),
        content = note_data.get('content')
    )
    db.session.add(note)
    db.session.commit()

    return jsonify(note.to_dict())
